const express = require('express');
const router = express.Router();
const { getAllTasks, createNewTask, deteteAllTasks, compliteAllTasks, deleteTask, compliteTask } = require('../controllers/task.controllers');

router.get('/getAllTasks', getAllTasks);
router.post('/createNewTask', createNewTask);
router.delete('/deteteAllTasks', deteteAllTasks);
router.patch('/compliteAllTasks', compliteAllTasks);
router.delete('/deleteTask', deleteTask);
router.patch('/compliteTask', compliteTask);

module.exports = router;