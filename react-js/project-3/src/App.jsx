import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter.slice";
import { getUserById } from "./redux/services/user.service";

function App() {
  let dispatch = useDispatch();
  let { count, user, isLoading, error } = useSelector((state) => state.counter);
  useEffect(() => {
    if (count > 0) dispatch(getUserById(count));
  }, [count]);
  return (
    <>
      <button onClick={() => dispatch(increment())}>count is {count}</button>
      {isLoading && <p>Loading...</p>}
      {user && <p>UserName: {user.name}</p>}
      {error && <p>Error: {error}</p>}
    </>
  );
}

export default App;
