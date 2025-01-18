const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { post } = require('../routes/tasks');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// {
  //   origin: ['https://deploy-mern-1whb.vercel.app'],
  //   methods:["post", "GET"],
  //   // credentials: true
// }
  

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

const tasksRoutes = require('./routes/tasks');

// app.use('/tasks', require('./routes/tasks'));
app.use('/tasks', tasksRoutes);

// module.exports = app; // Export the app
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Import necessary modules
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/taskManager', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define Task schema and model
// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
//   createdAt: { type: Date, default: Date.now },
// });

// const Task = mongoose.model('Task', taskSchema);

// // API Routes
// // Get all tasks
// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// // Create a new task
// app.post('/tasks', async (req, res) => {
//   const { title, description, status } = req.body;
//   try {
//     const newTask = new Task({ title, description, status });
//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// // Update a task
// app.put('/tasks/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, description, status } = req.body;
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       id,
//       { title, description, status },
//       { new: true }
//     );
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// // Delete a task
// app.delete('/tasks/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Task.findByIdAndDelete(id);
//     res.status(204).send();
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });









// {
//     "functions": {
//       "api/tasks.js": {
//         "runtime": "nodejs18.x"
//       }
//     }
//   }

  
