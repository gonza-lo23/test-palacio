import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import {ItemList} from "./ItemList";
import '../assets/styles/ItemListContainer.css';
import { useParams } from "react-router-dom";


function ItemListContainer () {

  const [data, setData] = React.useState([]);
  const {categoryId} = useParams();

  React.useEffect(()=> {
const url = 'http://localhost:3001/products';

fetch(url)
.then(response => 
  response.json()
)
.then((datas) => setData(datas))


})

    return(

      <div className='gg' >
           items categoria {categoryId}
            <ItemList items={data}/>
          
      </div>
    )
};

export default ItemListContainer;