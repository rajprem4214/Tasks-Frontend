import React, { useState, useEffect } from 'react';

const NewTask = ({ addTask, editTask, taskToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setDueDate(taskToEdit.dueDate);
        } else {
            setTitle('');
            setDescription('');
            setDueDate('');
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskToEdit) {
            editTask({ ...taskToEdit, title, description, dueDate });
        } else {
            console.log(title, description, dueDate)
            addTask({ title, description, dueDate });
        }
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-5 rounded shadow mb-4">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="px-3 py-2 placeholder-gray-500 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="px-3 py-2 placeholder-gray-500 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <input
                type="date"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
                required
                className="px-3 py-2 placeholder-gray-500 border text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default NewTask;
