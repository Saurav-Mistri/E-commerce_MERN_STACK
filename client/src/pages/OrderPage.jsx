import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery, usePayOrderMutation, useGetPaypalClientIdQuery } from '../slices/order_api_slice';


const OrderPage = () => {
    const { id: orderId } = useParams();

    const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

    const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

    const { data: paypal, isLoading: loadingPayPal, error: errorPayPal } = useGetPaypalClientIdQuery();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!errorPayPal && !loadingPayPal && paypal.clientId) {
            const loadPayPalScript = async () => {
                paypalDispatch({
                    type: 'resetOptions',
                    value: {
                        'client-id': paypal.clientId,
                        currency: 'USD',
                    },
                });
                paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
            };
            if (order && !order.is_paid) {
                if (!window.paypal) {
                    loadPayPalScript();
                }
            }
        }
    }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);


    function onApprove() { }
    function onApproveTest() { }
    function onError() { }
    function createOrder() { }

    return isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'></Message>
    ) : (
        <>
            <h1>Order {order._id}</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{order.user.name}
                            </p>
                            <p>
                                <strong>Email: </strong>{order.user.email}
                            </p>
                            <p>
                                <strong>Address:</strong>
                                {order.shipping_address.address}, {order.shipping_address.city}{' '}
                                {order.shipping_address.postalCode},{' '}
                                {order.shipping_address.country}
                            </p>
                            <p>
                                {order.is_delivered ? (
                                    <Message variant='success'>
                                        Delivered on {order.delivered_at}
                                    </Message>
                                ) : (
                                    <Message variant='danger'>
                                        Not Delivered yet!
                                    </Message>
                                )}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {order.paymentMethod}
                            </p>
                            {order.is_paid ? (
                                <Message variant='success'>
                                    Paid on {order.paid_at}
                                </Message>
                            ) : (
                                <Message variant='danger'>
                                    Not Paid yet!
                                </Message>
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {order.order_items.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} ale={item.name} fluid rounded />
                                        </Col>
                                        <Col>
                                            {item.name}
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} x ${item.price} = {item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ ListGroup.Item>
                            ))}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${order.item_price}</Col>
                                </Row>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${order.shipping_price}</Col>
                                </Row>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${order.tax_price}</Col>
                                </Row>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${order.total_price}</Col>
                                </Row>
                            </ListGroup.Item>
                            {/* PAY ORDER PLACEHOLDER */}
                            {!order.is_paid && (
                                <ListGroup.Item>
                                    {loadingPay && <Loader />}
                                    {isPending ? <Loader /> : (
                                        <div>
                                            <Button onClick={onApproveTest} style={{ marginBottom: '10px' }}>
                                                Test Pay Order
                                            </Button>
                                            <div>
                                                <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}></PayPalButtons>
                                            </div>
                                        </div>
                                    )}
                                </ListGroup.Item>
                            )}
                            {/* MARK AS DELIVERED PLACEHOLDER */}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default OrderPage;