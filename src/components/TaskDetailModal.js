import React from 'react';
import Modal from 'react-modal';

const TaskDetailModal = ({ task, closeTaskDetail }) => {
    return (
        <Modal
            isOpen={!!task}
            onRequestClose={closeTaskDetail}
            contentLabel="Task Details"
            className="bg-white p-8 rounded shadow-lg max-w-lg mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
            <p className="text-gray-700 mb-4">{task.description}</p>
            <p className="text-sm text-gray-500 mb-4">{task.dueDate}</p>
            <button
                onClick={closeTaskDetail}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Close
            </button>
        </Modal>
    );
};

export default TaskDetailModal;