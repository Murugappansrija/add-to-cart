import React, { useContext } from "react";
import { Products } from "./ProductCard";
import { Shopcontex } from "./CartCard";


const Home =()=>{
  const {addtocart} = useContext(Shopcontex)

   //const [product,images,madeby,price] = props.data
   return (<div className="card-div">
  
   {Products.map((data)=>{return <div className="card"><h1>{data.product}</h1> 
   <img src={data.images} alt="productimage" />   <h3>material:{data.madeby}</h3>
   <h3>{data.price}</h3><button onClick={()=>addtocart(data.id)}>Add to cart</button>
    
                 </div> })}

    
  </div>)
}
export default Home