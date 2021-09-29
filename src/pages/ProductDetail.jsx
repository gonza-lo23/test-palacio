import React from 'react';
import Main from '../components/Main';
import Cardo from '../components/Cardo.js';
import '../assets/styles/ProductDetail.css';

function ProductDetail() {

    const [data,setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/products')
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                throw response
            }
        })
        .then((data)=> setData(data))
        .catch((error)=> console.log(error))
    },[]);

 return(
     <div> <Main/>
<div className="card" >
    {data.map((producto)=>{
      return ( 
          <Cardo
          img={producto.img}
          description={producto.texto}
      />
      );


    })}
</div>
</div>
 )
};

export default ProductDetail;
