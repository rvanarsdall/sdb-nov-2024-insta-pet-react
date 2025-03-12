import React, { useState } from "react";

import Login from "./login-section/Login";
import SignUp from "./signup-section/SignUp";

const Auth = (props) => {
  // TODO: Make sure that we have props coming in to allow for updating a token

  // TODO: Create a state variable called showLogin and a function called setShowLogin using the useState hook. The initial value of showLogin should be true.

  return (
    <>
      {/* TODO: Create a ternary based on showLogin show the login component if show login is true otherwise if signup will be shown */}
      <Login updateToken={props.updateToken} />
      <SignUp />
    </>
  );
};

export default Auth;
