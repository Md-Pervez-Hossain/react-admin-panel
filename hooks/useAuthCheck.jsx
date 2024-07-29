import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../src/redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("loginAuth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth.accessToken) {
        dispatch(userLogin({ accessToken: auth.accessToken }));
      }
    }
    setAuthCheck(true);
  }, [dispatch, setAuthCheck]);

  return authCheck;
}
