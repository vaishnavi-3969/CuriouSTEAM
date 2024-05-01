import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CareerProfile from "./components/career/CareerProfile";
import { Sidebar, SidebarContext } from './components/layout/Sidebar';
import { useState } from "react";
import ExpertInterview from "./components/expert-interview/ExpertInterview";
import EducationalPathways from "./components/educational-pathways/EducationalPathways";
import IndustryTrends from "./components/industry-trends/IndustryTrends";
import EventsAndConferences from "./components/events/EventsAndConferences";
import ResourcesAndTools from "./components/tools/ResourcesAndTools";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <BrowserRouter>
        <button
          className={`fixed top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 focus:outline-none transition duration-300 ${
            sidebarVisible ? 'rotate-0' : 'rotate-90'
          }`}
          onClick={toggleSidebar}
        >
          <span className="sr-only">Toggle Sidebar</span>
          <span className="block absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-2 -translate-y-1/2 origin-left transition duration-300 ease-in-out" />
          <span className="block absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-2 -translate-y-1/2 origin-left transition duration-300 ease-in-out" />
          <span className="block absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-2 -translate-y-1/2 origin-left transition duration-300 ease-in-out" />
        </button>
        <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar }}>
          {sidebarVisible && <Sidebar />}
          <div className={`ml-${sidebarVisible ? '64' : '0'}`}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/career-profile" element={<CareerProfile />} exact />
              <Route path="/expert-interview" element={<ExpertInterview />} exact />
              <Route path="/educational-pathways" element={<EducationalPathways />} exact />
              <Route path="/industry-trends" element={<IndustryTrends/>} exact/>
              <Route path="/events" element={<EventsAndConferences/>} exact/>
              <Route path="/resources" element={<ResourcesAndTools/>} exact/>
            </Routes>
          </div>
        </SidebarContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
