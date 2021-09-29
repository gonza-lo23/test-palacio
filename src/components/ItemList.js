import React from 'react'
import Item from './Item' 
import  '../assets/styles/ItemList.css'
export const ItemList = ({items=[]}) => {


    return (
        <div className='bb' >
            {items.map(item =>

             <Item item={item}
             
             /> )}
        </div>
    )
}
