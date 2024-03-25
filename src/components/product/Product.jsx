import React, { useContext } from 'react';
import style from './product.module.css';
import { Link } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa6'
import { CartContext } from '../../context/CartContext';

function Product({ item }) {
  const { title, price, category, imageUrl, id, tag } = item || {};
  const {addToCart}=useContext(CartContext);
  return (
    <div className={style.product}>
      <img src={imageUrl} alt="" className="img-fluid mb-4 shadow rounded-1 " style={{ height: '250px', width: '100%' }} />
      <div className="d-flex justify-content-between align-items-start p-2">

        <div className="">
          <Link to={`/${category}/${tag}/${id}`} className="text-uppercase d-inline-block mb-2" style={{fontSize:'14px'}}>{title}</Link>
          <p className="text-secondary" >$ {price}</p>
          <p className="text-secondary"># {tag}</p>
        </div>
        <button onClick={()=>addToCart(item,id)} className="d-flex justify-content-center align-items-center bg-warning rounded border-0" style={{minWidth:'35px',minHeight:'35px'}}>
          <FaPlus className='' style={{fontSize:'18px'}} />
        </button>

      </div>
    </div>
  )
}

export default Product