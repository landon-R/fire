import { useContext } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <div className='container mx-auto' >
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/" component={Home} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
