import { useState } from "react";
import "./App.css";
import { Header } from "./Header/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  // const [inputValue, setInputValue] = useState(
  //   localStorage.getItem("inputValue") || ""
  // );

  const addTodoHandler = (data) => {
    setTodos([...todos, data]);
  };

  const click = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <Header
        addTodoHandler={addTodoHandler}
        todos={todos}
        opoenModalHandler={click}
        open={open}
        setOpen={setOpen}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
