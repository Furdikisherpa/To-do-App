import { IoIosArrowBack } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date()); // state to store selected date

  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the date when user selects a date
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const closeSidebar = () => setIsOpen(false);
  const openSidebar = () => setIsOpen(true);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center mt-5 gap-10 p-4 text-lg font-bold text-gray-800">
          <button onClick={closeSidebar}>
            <IoIosArrowBack size={30} />
          </button>
          <span className="text-2xl">Today's Task</span>
        </div>

        {/* Content Section */}
        <div className="flex gap-14 px-7 mt-5">
          <div>
            <h1 className="text-xl font-semibold">Fri, January 17</h1>
            <span className="text-gray-500 text-lg">10 tasks today</span>
          </div>

          {/* Calendar Button */}
          <div className="relative">
            <div 
              className="bg-orange-300 h-11 w-11 rounded-full drop-shadow-xl flex items-center justify-center"
              onClick={toggleCalendar}
            >
              <FaCalendarAlt size={22} />
            </div>
          </div>
        </div>

        {/* Placeholder for content */}
        <div>
          <p>hello</p>
        </div>
      </div>

      {/* Show Calendar when it's visible */}
      {isCalendarVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg shadow-xl overflow-auto">
            <button
              className="text-2xl font-bold"
              onClick={toggleCalendar}
            >
              X
            </button>
            <Calendar
              onChange={handleDateChange} // Update date on selection
              value={date} // Bind the selected date to the calendar
              tileClassName={({ date, view }) => {
                if (date.toDateString() === new Date().toDateString()) {
                  return 'today-date'; // Custom class for today's date
                }
                return null;
              }}
              onClickDay={(value) => setDate(value)} // Handle date click
            />
          </div>
        </div>
      )}

      {/* Sidebar open button */}
      {!isOpen && (
        <button
          onClick={openSidebar}
          className="fixed top-5 left-5 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          <IoIosArrowBack size={30} className="rotate-180" />
        </button>
      )}
    </div>
  );
};

export default SideBar;
