import {useContext} from 'react'
import styles from './Button.module.scss';
import check from '../../assets/icons/check.svg'
import { CardContext } from '../../context/card-context';

export function Button(){
  

  const {addToCart}=useContext(CardContext);
    return <button className={styles.button} >Adicionar</button>
}

export function ButtonActive(){
    const conteudo=useContext(CardContext);

  return <button className={styles.button_active} ><img src={check}/>ADICIONADO</button>
}