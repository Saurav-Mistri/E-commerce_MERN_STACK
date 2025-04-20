import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
});

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

// @desc Logout User / Clear cookie
// @route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

// @desc Get user profile
// @route POST /api/users/prodile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

// @desc update user profile using token
// @route PUT /api/users/prodile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

// @desc Get users
// @route GET /api/users
// @access Private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
});

// @desc Update users
// @route PUT /api/users/:id
// @access Private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}