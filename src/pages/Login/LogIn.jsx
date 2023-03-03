import React, { Fragment } from "react";
import LogInWithEmailPassword from "./LogInWithEmailPassword";
import LogInWithProviders from "./LogInWithProviders";

const LogIn = () => {
  return (
    <div
      style={{
        backgroundImage: `url("../../../assets/Background_6.jpg")`,
      }}
      className="bg-no-repeat bg-cover bg-center overflow-hidden bg-blend-screen bg-gray-900/75 h-screen "
    >
      {/* <LogInWithEmailPassword /> */}
      <LogInWithProviders />
    </div>
  );
};

export default LogIn;
