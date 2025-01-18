const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
  const { title, description, status } = req.body;
  const newTask = new Task({ title, description, status });
  await newTask.save();
  res.json(newTask);
});

// Update task status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;