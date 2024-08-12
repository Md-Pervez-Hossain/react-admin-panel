import React, { useState } from "react";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";

const Auth = () => {
  const [showComponent, setShowComponent] = useState("loginform");

  return (
    <div>
      {showComponent === "loginform" && (
        <Login setShowComponent={setShowComponent} />
      )}
      {showComponent === "forgetPassword" && (
        <ForgetPassword setShowComponent={setShowComponent} />
      )}
    </div>
  );
};

export default Auth;
