import React, { useEffect, useState } from "react";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import SetPassword from "./SetPassword";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [showComponent, setShowComponent] = useState("loginform");
  const accessToken = useSelector((state) => state?.auth?.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  return (
    <div>
      {showComponent === "loginform" && (
        <Login setShowComponent={setShowComponent} />
      )}
      {showComponent === "forgetPassword" && (
        <ForgetPassword setShowComponent={setShowComponent} />
      )}
      {showComponent === "setPassword" && (
        <SetPassword setShowComponent={setShowComponent} />
      )}
    </div>
  );
};

export default Auth;
