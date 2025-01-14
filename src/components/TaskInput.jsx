import { useState } from 'react';
import PropTypes  from 'prop-types';

function TaskInput({ addTask }) {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask({description, priority, dueDate, dueTime});
      setDescription('');
      setPriority('Medium');
      setDueDate('');
      setDueTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
        className='w-60 p-2 border justify-center border-black rounded-lg'
      /> 
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className='w-60 border p-2 border-black rounded-lg'>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select> 
      <input
      type='date'
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      className='w-60 p-2 border border-black rounded-lg'
      />
      <input
      type='time'
      value={dueTime}
      onChange={(e) => setDueTime(e.target.value)}
      className='w-60 p-2 border border-black rounded-lg'
      />
      <button type="submit" className=' w-60 bg-blue-700 p-2 px-4 text-white font-bold rounded-lg  active:bg-blue-100'>Add</button>
    </form>
  );
}

    TaskInput.propTypes = {
        addTask: PropTypes.func.isRequired
    };
export default TaskInput;
