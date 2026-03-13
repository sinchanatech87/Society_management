const express = require('express');//importing express framework because it will create server and handle request and create APIs
const router = express.Router();//helps to create different routes
const { createUser, getUsers, getUserById, updateUser, deleteUser, loginUser} = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");




router.post('/users', createUser);//request,URL,Function
router.get("/users", authMiddleware, getUsers); 
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
//router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);
router.delete("/users/:id", authMiddleware, roleMiddleware("admin"),deleteUser);//only admin can delete the user


module.exports = router;
