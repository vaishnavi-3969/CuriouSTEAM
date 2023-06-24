import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const SidebarContext = React.createContext();

const Sidebar = () => {
  const { sidebarVisible, toggleSidebar } = useContext(SidebarContext);

  return (
    <div className={`bg-gray-900 text-white h-screen w-64 fixed top-0 left-0 flex flex-col ${sidebarVisible ? 'justify-between' : ''}`}>
      <div className={`flex flex-col py-6 ${sidebarVisible ? '' : 'hidden'}`}>
        <div className="px-6">
          <h1 className="text-2xl font-bold">CuriouSTEAM</h1>
        </div>
        <nav className="mt-6">
          <Link to="/" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Home
          </Link>
          <Link to="/career-profile" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Career Profiles
          </Link>
          <Link to="/expert-interview" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Expert Interviews
          </Link>
          <Link to="/educational-pathways" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Educational Pathways
          </Link>
          <Link to="/industry-trends" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
          <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Industry Trends
          </Link>
          <Link to="/events" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
          <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Events and Conferences
          </Link>
          <Link to="/resources" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
          <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Resources and Tools
          </Link>
        </nav>
      </div>
      <div className="px-6 py-3">
        <p className="text-xs text-gray-500">STEAM World Explorer &copy; {new Date().getFullYear()}</p>
      </div>
      <button
        className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 text-gray-300 focus:outline-none"
        onClick={toggleSidebar}
      >
        {sidebarVisible ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  );
};

export { Sidebar, SidebarContext };
