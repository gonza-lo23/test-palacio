import React, { useEffect, useState } from "react";

//el contador de las tarjetas con stock
export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));



  const botonSuma = () => {
    setCount((p)=> p + 1);
  };

  const botonResta = () => {
    setCount((p)=> p - 1);
  };
  

  const agregar = () => {
    onAdd(count)
  };

  return (
    <div className="w-25 flex-column align-items-strech">


      <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center border-secondary border rounded">
        <button
          disabled={count <= 0}
          className="btn btn-outline-primary"
          type="button"
          onClick={botonResta}
        >
          -
        </button>
        <div>{count}</div>
        <button
          disabled={count >= stock}
          className="btn btn-outline-primary"
          type="button"
          onClick={botonSuma}
        >
          +
        </button>
      </div>
      <button
        
        className="btn btn-outline-primary w-75"
        type="button"
        onClick={agregar }
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
