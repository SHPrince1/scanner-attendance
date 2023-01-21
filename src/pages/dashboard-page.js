import React from "react";


import AddLecturer from "../components/add-lecturer-complete";
import CreateStudent from "../components/create-student";
import Dashboard from "../components/dashboard";
import EmailPage from "../components/emailpage";
import OpenPage from "../components/open-page";
import OtpPage from "../components/otp-page";
import Success from "../components/success";
import WelcomePage from "../components/welcome-page";


const Dashboardpage = () => {
  return (
    <div>
      <Dashboard />

      <OpenPage />

      <WelcomePage />

      <EmailPage />

      <OtpPage />

      <Success />

      <Dashboardpage />

      <CreateStudent />

      <AddLecturer />
    </div>
  );
};

export default Dashboardpage;
