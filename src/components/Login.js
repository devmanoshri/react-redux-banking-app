import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogIn } from "../actions/index";

const Login = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const dispatch = useDispatch();
  const handelLogIn = () => {
    dispatch(toggleLogIn());
  };
  return (
    <>
      <h1 className="is-size-3">
        {isLoggedIn ? "You are logged In" : "You are logged out"}
      </h1>
      <button className="button is-success" onClick={handelLogIn}>
        Log In
      </button>
    </>
  );
};
export default Login;
