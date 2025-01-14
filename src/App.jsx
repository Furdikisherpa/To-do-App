import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isFromVisible, setIsFormVisible] = useState(false);

  const priorityMap = {high:1, Medium:2, Low:3};

  // const addTask = (description) => {
  //   const newTask = { id: Date.now(), description, completed: false };
  //   setTasks([...tasks, newTask]);
  // };

  const addTask = (newTask) => {
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), ...newTask, completed: false },
    ];

    updatedTasks.sort(
      (a, b) =>
        priorityMap[a.priority] - priorityMap[b.priority] ||
        new Date(`${a.dueDate}T${a.dueTime}`) - new Date(`${b.dueDate}T${b.dueTime}`)
    );

    setTasks(updatedTasks);
  };

  const editTask = (id, updatedDescription) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, description: updatedDescription } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1 className='flex justify-center items-center mt-10 text-3xl font-bold mb-5'>To-Do List</h1>

      <div className='flex justify-center items-center mb-5'>
        <button onClick={() => setIsFormVisible(!isFromVisible)}
          className='bg-green-600 text-white px-4 py-2 rounded-lg font-bold'
          >
          {isFromVisible ? 'Hide Task Form' : 'Add New Task'}
        </button>
      </div>

      {isFromVisible && <TaskInput addTask={addTask} />}

      <Filter setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
