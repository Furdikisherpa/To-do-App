import TaskItem from "./TaskItem"
import PropTypes from "prop-types"

function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {
  return (
    <div>
      <ul>
        {tasks.map(task => (
            <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            />
        ))}
      </ul>
    </div>
  )
}

TaskList.propTypes = {
    task: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })
    ).isRequired,
    tasks: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TaskList
