import React, { useContext } from 'react'
import style from './cartItem.module.css'
import { FaMinus } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


function CartItem({ item }) {
  const { id, title, imageUrl, price, amount, tag , category } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div className={style.cartItem}>
      <div className="card mb-3 border-0 w-100">
        <div className="row g-0">
          {/* image  */}
          <div className="col-6 col-md-4 p-3">
            <img src={imageUrl} className="img-fluid rounded" alt={title} />
          </div>
          {/* title & price  */}
          <div className="col-6 col-md-8 p-md-5 py-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <Link to={`/${category}/${tag}/${id}`} className='text-decoration-none text-dark'>
                <h5 className="card-title"> {title}</h5>
                </Link>
                <button className='btn' onClick={() => removeFromCart(id)} >
                  <RxCross2 />
                </button>
              </div>
              <p className="text-danger fw-bold"> $ {price} </p>
              {/* plus & minus buttons  */}
              <div class="btn-group mt-1 mt-md-3 mt-lg-5" role="group">
                <button onClick={() => decreaseAmount(id)} type="button" class="btn btn-outline-danger">
                  <FaMinus />
                </button>
                <button className='btn btn-outline-dark' disabled> {amount}</button>
                <button onClick={() => increaseAmount(id)} type="button" class="btn btn-outline-success">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem