import React, { useState, useEffect } from "react";
import Loadingx from "./Loadingx";
import Products from "./Products";


function ListProducts() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerAPI = async () => {
      const res = await fetch("http://localhost:4000/products");
      const datos = await res.json();
      setProductos(datos.products);
    };
    obtenerAPI();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loadingx />
      ) : (
        <div className='flex flex-wrap' >
          {productos.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListProducts;
