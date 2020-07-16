import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListProducts from "./components/ListProducts";

function App() {
  

  return (
    <div className="container">
     <div >
     <Header />
        <div className="row" >
        <ListProducts/>
        </div>
     </div>
    </div>
  );
}

export default App;
