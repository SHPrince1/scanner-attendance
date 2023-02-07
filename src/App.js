// import logo from './logo.svg';
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";

import AddLecturer from "./components/add-lecturer-complete";
import CreateStudent from "./components/create-student";
import Dashboard from "./components/dashboard";
import EmailPage from "./components/emailpage";
import OpenPage from "./components/open-page";
import OtpPage from "./components/otp-page";
import Success from "./components/success";
import WelcomePage from "./components/welcome-page";
import Dashboardpage from "./pages/dashboard-page";
import Actionslink from "./components/actions-link";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" exact element={<Dashboardpage />} />
    //   </Routes>
    // </Router>
    <div>
      {/* <OpenPage /> */}
      {/* <EmailPage /> */}
      {/* <OtpPage /> */}
      <Success/>
      {/* <CreateStudent /> */}
      {/* <AddLecturer /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
