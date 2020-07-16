import React from "react";
import { Card, Button } from "react-bootstrap";

function Products({product}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imgUrl} />
      <Card.Body>
        <Card.Title>{product.name} </Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;
