const express = require('express');//importing express framework because it will create server and handle request and create APIs
const router = express.Router();//helps to create different routes
const { createUser, getUsers, getUserById, updateUser, deleteUser, loginUser} = require('../controllers/userController');



router.post('/users', createUser);//request,URL,Function
router.get('/users', getUsers); 
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);


module.exports = router;
