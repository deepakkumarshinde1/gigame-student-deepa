import { useState } from "react";
import Button from "./Button";
import type { Login } from "./features/types/user.type";

function App() {
  let [count, setCount] = useState<number>(0);
  let [login, setLogin] = useState<Login | null>(null);

  let btnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {};
  let onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;
    event.target.name;
  };
  return (
    <>
      <h1>Counter {count}</h1>
      <Button onClick={btnClick} text="" />
      <input type="text" onChange={onChange} />
    </>
  );
}

export default App;
