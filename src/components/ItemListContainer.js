import React from 'react';
import Main from './Main.js';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import Item from './Item.js';

function ItemListContainer(props) {

    const [cargando, setCargando] = React.useState(false);

    return (
        <div>
            <h1>el estado de nuestro servicio es {cargando ? "online" : "oflline"}</h1>
           
           {data?.map((producto)=> {
               return (
                   <Card 
                     key={producto.id}
                     productId={producto.id}
                     title={producto.title}
                     price={producto.price}
               )
           })}
        </div>
    )
}

export default ItemListContainer;

/*

hacer una llamada con promise(set timeout) a una api falsa y
hacer que esta cargando

item es la cartita 
itemList solo mapea*/