import React from 'react';

const Task = ({ task, deleteTask, startEdit, openTaskDetail, completeTask }) => {
    return (
        <div className="bg-white p-3 rounded shadow mb-2 flex items-center justify-between cursor-pointer" onClick={() => openTaskDetail(task)}>
            <div className="flex items-center">
                <input type="checkbox" checked={task.completed} className="mr-3 checkbox-custom" onClick={(e) => { e.stopPropagation(); completeTask(task.id); }} />
                <div>
                    <h2 className={`text-lg font-bold ${task.completed ? 'completed-task' : ''}`}>{task.title}</h2>
                    <p className="text-sm text-gray-500">{task.dueDate}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={(e) => { e.stopPropagation(); startEdit(task); }}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Task;