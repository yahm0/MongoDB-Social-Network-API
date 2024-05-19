const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection failed:", err));

  // Import routes
const userRoutes = require('./Routes/userRoutes');
const thoughtRoutes = require('./Routes/thoughtRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);