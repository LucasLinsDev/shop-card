import React,{createContext, useState} from 'react';


export const CardContext=createContext();

const initalState= []
export const CardContextProvider=(props)=>{


  const [cartItems,setCartItems]=useState(initalState);

  const [withItems,setWithItems]=useState([]);
  const addToCart=(props)=>{

    if(cartItems.length === 0){
       setCartItems([props])
    
 
      }else{
      setCartItems((prev)=> [...prev,props])
      

    }

  }

  const addToWish=(props)=>{


    if(withItems.length === 0){
       setWithItems([props])
    }else{
      setWithItems((prev)=> [...prev,props])
    }
  

  }

  const removeToCart=(props)=>{
    
    const index=cartItems.filter(product=>product.id !== props.id);
    setCartItems(index);
   
    
  }

  const removeToWish=(props)=>{

    const index=withItems.filter(product=>product.id !== props.id);
    setWithItems(index);

     


  }

  const contextValue={cartItems,addToCart,withItems,addToWish,removeToWish,removeToCart};
  console.log(cartItems)
  console.log(withItems)
  return <CardContext.Provider value={contextValue}>{props.children} </CardContext.Provider>

}