import { createContext, useState, useEffect } from "react";
import AuthService from "../../api/AuthService";
import Loading from "../../pages/Loading";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   AuthService.isAuthenticated().then((data) => {
  //     setUser(data.user);
  //     setIsAuthenticated(data.isAuthenticated);
  //     setIsLoaded(true);
  //   });
  // }, []);

  useEffect(() => {
    const obtenerApp = async () => {
      const data = await AuthService.isAuthenticated();
      console.log(data);
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    };
    obtenerApp();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const data = await AuthService.isAuthenticated();
  //     console.log(data);
  //     setUser(data.user);
  //     setIsAuthenticated(data.isAuthenticated);
  //     setIsLoaded(true);
  //   })();
  // }, []);

  return (
    <div>
      {!isLoaded ? (
        <Loading />
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
}
