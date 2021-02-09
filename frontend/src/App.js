import React from "react";
import LayoutBase from "./components/layouts/LayoutBase";
import ListProducts from "./components/ListProducts";

function App() {
  

  return (
    <LayoutBase>
        <div className="row" >
        <ListProducts/>
        </div>
    </LayoutBase>
  );
}

export default App;
