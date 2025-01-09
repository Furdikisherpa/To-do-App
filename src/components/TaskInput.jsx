import { useState } from 'react';
import PropTypes  from 'prop-types';

function TaskInput({ addTask }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

    TaskInput.propTypes = {
        addTask: PropTypes.func.isRequired
    };
export default TaskInput;
