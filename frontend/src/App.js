import { useContext } from "react";
import { AuthContext } from "./context/auth/AuthContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import Admin from "./pages/Admin";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <div className="container mx-auto px-4"> */}
         
            <Route exact path="/" component={Home} />
            <Route  path="/admin" component={Admin} />
            <Route  path="/register" component={Register} />
            <Route  path="/login" component={Login} />
            <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
            <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
            {/* <Route exact={true}  path="/todos" component={Todos} /> */}
          
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
