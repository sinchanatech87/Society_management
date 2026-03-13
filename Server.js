const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const flatRoutes = require('./routes/flatRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use("/api", flatRoutes);


// 🔴 MongoDB connection (THIS PART IS KEY)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

// test route
app.get('/', (req, res) => {
  res.send('Society Management Backend Running');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
