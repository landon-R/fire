import React, { useState, useRef, useEffect } from "react";
import AuthService from "../api/AuthService";
// import Message from "../components/Message";
import { viewAlertRol } from "../tools/viewAlert";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
//   const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "", role: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      message.msgError
        ? viewAlertRol(message.msgBody, "error")
        : viewAlertRol(message.msgBody, "success");
    //   setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div className="w-full flex justify-center ">
      <form
        className="bg-blueGray-300  rounded-xl border mt-72 border-blue-600 p-4"
        onSubmit={onSubmit}
      >
        <h3>Please Register</h3>
        <label htmlFor="username" className="sr-only">
          Username:{" "}
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          className="bg-green-100 px-4 py-1.5 rounded-xl w-full my-1.5 leading-snug"
          placeholder="Enter Username"
        />
        <label htmlFor="password" className="sr-only">
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          className="bg-green-100 px-4 py-1.5 rounded-xl w-full my-1.5 leading-snug"
          placeholder="Enter Password"
        />
        <label htmlFor="role" className="sr-only">
          Role:{" "}
        </label>
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={onChange}
          className="bg-green-100 px-4 py-1.5 rounded-xl w-full my-1.5 leading-snug"
          placeholder="Enter role (admin/user)"
        />
        <div className="w-11/12 mx-auto flex justify-center">
          <button
            className="bg-green-600 w-9/12  text-white font-bold px-4 p-2 leading-tight rounded-xl"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      {/* {message ? <Message message={message} /> : null} */}
    </div>
  );
};

export default Register;
