import React from "react";

function Products({ product }) {
  return (
    <div className="m-2 bg-gray-300 rounded-lg" style={{ width: "15rem" }}>
      <div className="py-4 px-4">
        <img className="rounded-md" src={product.imgUrl} alt="red" />
        <h3>{product.name} </h3>
        <h3>{product.description}</h3>
        <h3> Precio: {product.unitaryPrice}</h3>
      </div>
      <div className="w-full flex justify-center mb-4">
        <button
          className="bg-green-500 w-9/12 font-bold px-4 py-1 rounded"
          type="button"
        >
          Ver mas
        </button>
      </div>
    </div>
  );
}

export default Products;
