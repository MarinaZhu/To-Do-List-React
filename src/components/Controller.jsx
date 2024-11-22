import { useState, useRef } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

function Controller() {
  const [todos, setTodos] = useState([]);
  const idCounter = useRef(0);

  const addToList = (text) => {
    idCounter.current += 1;
    const newTodo = {
      id: idCounter.current,
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log('controller', todos);
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Form addToList={addToList} />
      <Tasks todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}
export default Controller;
