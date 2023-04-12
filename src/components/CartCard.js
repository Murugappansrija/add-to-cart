import React, { createContext, useState } from "react";
import { Products } from "./ProductCard";

export  const Shopcontex = createContext(null)

const Defaultvalue =()=>{
    let cart ={}
    for(let i =1 ; i<=Products.length;i++){
        cart[i]=0
    }
    return cart
}

export const Shopcontextprovider =(props)=>{


    const[cartitem, setcartitem] = useState(Defaultvalue())
 
    const addtocart =(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
 
    const removecard =(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const contexvalue ={cartitem,addtocart,removecard}
    console.log(cartitem)
 
    return <Shopcontex.Provider value={contexvalue}>{props.children}</Shopcontex.Provider>
}