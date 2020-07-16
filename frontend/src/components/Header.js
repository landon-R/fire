import React from "react";
import {Button} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <h3>App Carrito</h3>
      <div className="d-flex justify-content-end">
        <Button variant="info"> Add </Button>
      </div>
    </div>
  );
};

export default Header;
