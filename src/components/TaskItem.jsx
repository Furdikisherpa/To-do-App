import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskItem({ task, editTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const priorityColors = {
    High: 'text-red-600',
    Medium: 'text-yello-600',
    Low: 'text-green-600',
  }

  const today = new Date();
  const taskDeadline = new Date (`${task.dueDate}T${task.dueTime}`);

  const isOverdue = taskDeadline < today && !task.completed;
  const isDueToday = 
  taskDeadline.toDateString() === today.toDateString() && taskDeadline > today && !task.completed;

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newDescription);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`flex justify-center items-center mt-5 gap-3 ${isOverdue ? 'text-red-600': isDueToday ? 'text-yellow-500' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className='w-7 h-7'
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='text-xl p-3'>
          {task.description}
        </span>
      )}
      <span className={`font-bold ${priorityColors[task.priority]}`}>
        {task.priority}
      </span>
      <span className='italic text-gray-600'>Due: {task.dueDate} at {task.dueTime}</span>
      <button onClick={handleEdit} className='bg-blue-700 p-2  px-4 rounded-lg text-white font-bold'>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)} className='bg-red-600 p-2  px-4 rounded-lg text-white font-bold'>Delete</button>
    </li>
  );
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.string.isRequired,
        dueDate: PropTypes.bool.isRequired,
        dueTime: PropTypes.string.isRequired
    }).isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
