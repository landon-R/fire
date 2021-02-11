import { useContext } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import LayoutBase from "./components/layouts/LayoutBase";
import ListProducts from "./components/ListProducts";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );

  console.log(user);
  console.log(isAuthenticated);
  return (
    <LayoutBase>
      <div className="row">
        <ListProducts />
      </div>
    </LayoutBase>
  );
}

export default App;
