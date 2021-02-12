import { useContext } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto px-4">
          <Switch>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/todos" component={Todos} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
