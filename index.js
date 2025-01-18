const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());                 // Allows cross-origin requests from frontend
app.use(express.json());         // Parses incoming JSON data

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 90000,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Routes
app.use('/tasks', require('./routes/tasks'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));