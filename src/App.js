import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import TaskDetailModal from './components/TaskDetailModal';

const BACKEND_URL = 'https://tasks-backend-q8r9.onrender.com';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from server
    fetch(`${BACKEND_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    fetch(`${BACKEND_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then(response => response.json())
      .then(data => setTasks(oldTasks => [...oldTasks, data]));
  };

  const editTask = (task) => {
    fetch(`${BACKEND_URL}/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then(response => response.json())
      .then(data => setTasks(oldTasks => oldTasks.map(t => t.id === data.id ? data : t)));
    setTaskToEdit(null);
  };

  const startEdit = (task) => {
    setTaskToEdit(task);
  };

  const deleteTask = (id) => {
    fetch(`${BACKEND_URL}/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTasks(oldTasks => oldTasks.filter(task => task.id !== id)));
  };

  const completeTask = (id) => {
    setTasks(oldTasks => oldTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openTaskDetail = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetail = () => {
    setSelectedTask(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 bg-white p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">Task Management App</h1>
        <NewTask addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      </div>
      <div className="w-2/3 p-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search tasks"
          className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 mb-4 w-full"
        />
        <TaskList tasks={tasks.filter(task => task.title.includes(searchTerm))} deleteTask={deleteTask} startEdit={startEdit} openTaskDetail={openTaskDetail} completeTask={completeTask} />
      </div>
      {selectedTask && <TaskDetailModal task={selectedTask} closeTaskDetail={closeTaskDetail} />}
    </div>
  );
};

export default App;