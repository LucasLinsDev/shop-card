import {useState,useContext, useEffect} from 'react'
import styles from './Card.module.scss';
import cardimage from '../../assets/images/card/image.png'
import { Button, ButtonActive } from '../Button/Button';
import { Icon } from './Icon';
import { CardContext } from '../../context/card-context';

interface CardProps{
  id:Number,
  title:string,
  oldprice:string,
  price:string,
  parcelado:string,
  img:string
}


export function Card(props:CardProps){

  const {id,title,oldprice,price,parcelado,img}=props
  const [hover,setHover]=useState(false);
  const [buttonActive,buttonSetActive]=useState(false);
  const [buttonAdd,buttonSetAdd]=useState(false);
 
  const {cartItems,addToWish,withItems,removeToWish,addToCart,removeToCart}=useContext(CardContext);

  const handleHover =()=>{
    setHover(true)
  }
  const handleLeave=()=>{
       setHover(false) 
  }

  useEffect(()=>{
     
    handleItems();

    handleWish();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems,withItems])

  const handleItems=()=>{

    const produto= cartItems.find((produto:any)=>produto.id ===id);
    
     produto !== undefined ? buttonSetAdd(true) : buttonSetAdd(false);
    
  }
  const handleWish=()=>{
   const produtoFavorito= withItems.find((produto:any)=>produto.id ===id); 
   produtoFavorito !== undefined ?    buttonSetActive(true)  :    buttonSetActive(false)
  }


  return (
    <div className={styles.card}> 
     
        { buttonActive ? (
           <div className={styles.card__wishlist} onMouseOver={()=>handleHover()} onMouseLeave={()=>handleLeave()} onClick={()=>removeToWish(props)}>
    
             <Icon color={hover ? "#E20F15" : "#F3151B"} stroke={hover ? "#FFFFFF" : "#FFFFFF" }  /> 
           </div>     
        ) : (
           <div className={styles.card__wishlist} onMouseOver={()=>handleHover()} onMouseLeave={()=>handleLeave()} onClick={()=>addToWish(props)}>
    
            <Icon color={hover ? "#FEE5EC" : "#fff"} stroke={hover ? "#F3151B" : "#1C1C1C" }/>
            </div>
        )}
   
      <div className={styles.card__image}>
          <img src={img} alt=""/>
      </div>
      <div className={styles.card__content}>
        <h3>{title?.slice(0,96)}</h3>
        <h5>R$ {oldprice}</h5>
        <h4>R$ {price}</h4>
        <p>em até <span>10x de R$ {parcelado} sem</span> juros</p>

      </div>
        {buttonAdd ? (
            <div onClick={()=>removeToCart(props)}>

           <ButtonActive />
           </div>
    
        ) : (
       
         
       <div onClick={()=>addToCart(props)}>
          <Button />
           </div>
           
        )}
     
      
    </div>
  )
}