# Society_management
Building a Society Management web app for flats and shops that helps to store details and maintenance payments and also notices.
# Society Management System (Backend)

## Project Description

This project is a **Society Management System Backend API** built using **Node.js, Express.js, and MongoDB**.
It provides APIs to manage users and society flats with authentication and authorization.

The system uses **JWT (JSON Web Token)** for secure login and protected routes.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs (for password hashing)
* Postman (for API testing)

---

## Project Folder Structure

```
Backend
│
├── controllers
│   ├── userController.js
│   └── flatController.js
│
├── models
│   ├── User.js
│   └── flatModel.js
│
├── routes
│   ├── userRoutes.js
│   └── flatRoutes.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── .env
├── server.js
└── package.json
```

---

## Features Implemented

### User Management

* Register User
* Login User
* Password hashing using bcrypt
* JWT Token generation
* Get Users
* Update User
* Delete User (Admin only)

### Authentication & Authorization

* JWT Token authentication
* Protected routes using middleware
* Role-based access control (Admin / User)

### Flats Management

* Create Flat
* Get All Flats
* Secure APIs using JWT authentication

---

## Environment Variables (.env)

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES=1d
```

---

## Installation Steps

1. Clone the repository

```
git clone https://github.com/yourusername/society-management-system.git
```

2. Go to project folder

```
cd Backend
```

3. Install dependencies

```
npm install
```

4. Start the server

```
node server.js
```

Server will run on:

```
http://localhost:3000
```

---

## API Endpoints

### User APIs

Create User

```
POST /api/users
```

Login

```
POST /api/login
```

Get Users

```
GET /api/users
```

Update User

```
PUT /api/users/:id
```

Delete User (Admin only)

```
DELETE /api/users/:id
```

---

### Flats APIs

Create Flat

```
POST /api/flats
```

Get All Flats

```
GET /api/flats
```

---

## Authentication

Most APIs require **JWT token**.

Add token in request header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## Testing

APIs are tested using **Postman**.

Steps:

1. Register a user
2. Login to get JWT token
3. Use token to access protected routes

---

## Future Improvements

* Residents Management
* Complaint Management
* Maintenance Payments
* Notice Board System
* Admin Dashboard

---

## Author

Sinchana Nayak

Backend developed as part of a **Society Management System project using MERN stack**.

