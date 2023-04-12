import React, { useContext } from "react";
import { Products } from "../components/ProductCard";
import { Shopcontex } from "../components/CartCard";
export const Cart=()=>{
    const {cartitem} = useContext(Shopcontex)
    return <div>
        {Products.map((crd)=>{if(cartitem[crd.id]!==0){ return<div className="card"><h1>{crd.product}</h1>
        <img src={crd.images} alt="productimage"/>
        <h3>{crd.price }</h3>
        </div>}
    })} 
    </div>
    
}