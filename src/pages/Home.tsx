import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../redux/modules/auth";
import { RootState } from "../types";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={click}>Log out</button>
    </div>
  );

  function click() {
    dispatch(logout());
  }
}
