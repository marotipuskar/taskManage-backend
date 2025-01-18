const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// https://frontend-task-management-wine.vercel.app/
// app.use(cors());                 // Allows cross-origin requests from frontend
app.use(cors({
  origin: "https://frontend-task-management-wine.vercel.app", // Allow your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // If cookies or authentication are required
}));
// Handle Preflight Requests
// app.options('*', cors({
//   origin: "https://frontend-task-management-wine.vercel.app",
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));

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
