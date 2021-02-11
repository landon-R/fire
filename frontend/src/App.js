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
        <h4>ffd</h4>
        <ListProducts />
      </div>
    </LayoutBase>
  );
}

export default App;
