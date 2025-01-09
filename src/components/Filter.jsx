import PropTypes from "prop-types";

function Filter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Filter;
