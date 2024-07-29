import React, { createContext, useContext } from "react";
import useAuthCheck from "../../hooks/useAuthCheck";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();
  const authChecked = useAuthCheck();

  return (
    <AuthContext.Provider value={""}>
      {!authChecked ? (
        <div className="flex items-center justify-center h-screen">
          <p>Loading....</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const userAuthContext = () => {
  const value = useContext(AuthProvider);
  if (value == null) throw Error("Cannot use outside of Context");
  return value;
};
