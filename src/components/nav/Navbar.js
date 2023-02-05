import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../actions/actions";

import "../../App.css";
// create-note
const Navbar = ({ bgcolor }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  console.log("state", state);
  return (
    <Box bgColor={"whiteAlpha.400"} rounded="lg">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/" className="ml-3 text-xl">
              NoteIt
            </Link>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/create-note" className="mr-5 hover:text-gray-900">
              Cnotes
            </Link>

            <Link to="/create-testpaper" className="mr-5 hover:text-gray-900">
              Ctestpaper
            </Link>
            <Link to="/update-testpapers" className="mr-5 hover:text-gray-900">
              Utestpaper
            </Link>
            <Link
              to="/supervisor/dashboard"
              className="mr-5 hover:text-gray-900"
            >
              SupervisorD
            </Link>
            <Link to="/student/dashboard" className="mr-5 hover:text-gray-900">
              StudentD
            </Link>
            <Link to="/notes" className="mr-5 hover:text-gray-900">
              Notes
            </Link>
            <Link to="/students" className="mr-5 hover:text-gray-900">
              Students
            </Link>
            <Link to="/testpapers" className="mr-5 hover:text-gray-900">
              Tests
            </Link>

            <Link to="/student/dashboard" className="mr-5 hover:text-gray-900">
              <button
                onClick={() => dispatch(logoutUser())}
                className="inline-flex items-center bg-sky-400  border-0 py-2 px-6 focus:outline-none text-white font-bold shadow-xl  rounded text-base mt-4 md:mt-0"
              >
                Profile
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </Box>
  );
};

export default Navbar;
