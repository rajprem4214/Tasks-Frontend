import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, startEdit, openTaskDetail, completeTask }) => {
    const activeTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);
    console.log(tasks)

    return (
        <div className="space-y-2">
            {activeTasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} startEdit={startEdit} openTaskDetail={openTaskDetail} completeTask={completeTask} />
            ))}
            <h2 className="text-md border rounded-md shadow-md bg-white text-gray-500 p-2 w-fit">
                Completed ({completedTasks.length})
            </h2>
            {completedTasks.map(task => (
                <Task key={task.id} task={task} deleteTask={deleteTask} startEdit={startEdit} openTaskDetail={openTaskDetail} completeTask={completeTask} />
            ))}
        </div>
    );
};

export default TaskList;