import PropTypes from "prop-types";

function Filter({ setFilter }) {
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      <button className="border p-3 bg-black text-white font-bold rounded-lg hover:text-black hover:border-2 hover:border-black hover:bg-white" onClick={() => setFilter('all')}>All</button>
      <button  className="border p-3 bg-green-600 text-white font-bold rounded-lg  hover:text-green-600 hover:border-2 hover:border-green-600 hover:bg-white" onClick={() => setFilter('completed')}>Completed</button>
      <button  className="border p-3 bg-red-600 text-white font-bold rounded-lg  hover:text-red-600 hover:border-2 hover:border-red-600 hover:bg-white" onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Filter;
