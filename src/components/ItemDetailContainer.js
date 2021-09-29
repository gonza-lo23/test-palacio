import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";







export default function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()


     return <> {itemId} - {otroId}
     <ItemDetail item={item} /></>
    };
