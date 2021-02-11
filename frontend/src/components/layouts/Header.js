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
              <div className="flex items-center space-x-2">
                <Link to="/">
                  <a className="hover:text-blue-500">Home</a>
                </Link>
                <Link to="/login">
                  <a className="hover:text-blue-500">Login</a>
                </Link>
                <Link to="/register">
                  <a className="hover:text-blue-500">Register</a>
                </Link>
              </div>
            ) : (
              // SI AUTHENTICATED
              <div>
                <Link to="/">
                  <a className="hover:text-blue-500">Home</a>
                </Link>
                <Link to="/todos">
                  <a className="hover:text-blue-500">Todos</a>
                </Link>
                {user.role === "admin" && (
                  <Link to="/admin">
                    <a className="hover:text-blue-500">Admin</a>
                  </Link>
                )}
                <button
                  type="button"
                  className="text-red-300"
                  onClick={onClickLogoutHandler}
                >
                  Logout
                </button>
              </div>
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
