import { useState, useContext } from "react";
import AuthService from "../api/AuthService";
import Message from "../components/Message";
import { AuthContext } from "../context/auth/AuthContext";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  //OBTINE DATOS DEL INPUT AL STATE
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //ENVIA DATOS AL SERVER
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/todos");
      } else setMessage(message);
    });
  };

  return (
    <div className="w-full flex justify-center">
      <form className="w-7/12 mx-auto bg-gray-200 p-4 rounded  mt-72 " onSubmit={onSubmit}>
        <h3 className="font-bold text-xl mb-2">Please sign in</h3>
        <label htmlFor="username" className="sr-only">
          Username:{" "}
        </label>
        <input
          className="w-full rounded-md px-4 py-1.5 leading-tight my-1.5"
          type="text"
          name="username"
          onChange={onChange}
          placeholder="Enter Username"
        />
        <label htmlFor="password" className="sr-only">
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="w-full rounded-md px-4 py-1.5 leading-tight my-1.5"
          placeholder="Enter Password"
        />
        <div className='w-full flex justify-center my-2' >
          <button
            className="px-4 py-1.5 w-9/12  bg-blueGray-900 text-white font-semibold rounded-xl"
            type="submit"
          >
            Log in{" "}
          </button>
        </div>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
