//aqui se hace el contador//

import React, {useEffect, useState} from 'react'

function ItemCount() {
    
    const [initial, setInitial]= useState({ stock:undefined, initial:undefined});   

    useEffect(() => {
        console.log('se actualiza')
        
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default ItemCount
