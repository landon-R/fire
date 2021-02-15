import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";
import AuthService from "../../api/AuthService";

export default function Header() {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };



  return (
    <nav className="bg-blueGray-900 text-white">
      <div className="flex items-center mx-8 h-16 justify-between">
        <div className="flex items-center">
          <h3 className="hover:text-blue-500 font-bold">App Carrito</h3>
          <ul className="ml-4">
            {!isAuthenticated ? (
              // NO AUTHENTICATED
              <li className="flex items-center space-x-2">
                <Link className="hover:text-blue-500" to="/">
                  Home
                </Link>
                <Link className="hover:text-blue-500" to="/login">
                  Login
                </Link>
                <Link className="hover:text-blue-500" to="/register">
                  Register
                </Link>
              </li>
            ) : (
              // SI AUTHENTICATED
              <li className="flex items-center space-x-2">
                <Link className="hover:text-blue-500" to="/">
                  Home
                </Link>
                <Link className="hover:text-blue-500" to="/todos">
                  Todos
                </Link>
                {user.role === "admin" && (
                  <Link className="hover:text-blue-500" to="/admin">
                   Admin
                  </Link>
                )}
                <button
                  type="button"
                  className="text-red-400 hover:text-red-500"
                  onClick={onClickLogoutHandler}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <div className="">
          <button className="bg-blue-500 px-4 py-1 rounded-lg  ">
            Agregar{" "}
          </button>
        </div>
      </div>
    </nav>
  );
}
