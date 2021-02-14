import React, { useState, useContext, useEffect } from "react";
import TodoItem from "../components/TodoItem";
import TodoService from "../api/TodoService";
import Message from "../components/Message";
import { AuthContext } from "../context/auth/AuthContext";

const Todos = (props) => {
  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorized") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setTodo({ name: e.target.value });
  };

  const resetForm = () => {
    setTodo({ name: "" });
  };

  return (
    <div className='w-7/12 mx-auto' >
      <form className="bg-green-400 p-4 rounded-xl" onSubmit={onSubmit}>
        <div className="relative my-4">
          <label className="absolute bottom-9 left-1" htmlFor="todo">
            Enter Todo
          </label>
          <input
            className="px-4 py-1.5 rounded-xl w-full leading-snug"
            type="text"
            name="todo"
            value={todo.name}
            onChange={onChange}
            placeholder="Please Enter Todo"
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="w-10/12 px-4 py-1.5 bg-indigo-600 text-white rounded-xl font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <hr className="border border-black my-4" />
      <ul className="list-decimal">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </ul>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Todos;
