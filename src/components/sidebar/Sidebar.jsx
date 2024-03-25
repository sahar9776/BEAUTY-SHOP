import React, { useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import CartItem from '../cartitem/CartItem'
import style from './sidebar.module.css'
import {CartContext } from '../../context/CartContext'
import {BsTrash} from 'react-icons/bs'

function Sidebar() {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const {cart,total,clearCart,itemAmount}=useContext(CartContext);
    return (
        <div className={`${isOpen ? 'd-block' : 'd-none'}`}>
            <div className={style.sidebar}>
                <div className={style.innerSidebar}>
                    <div className={style.header}>
                        <h3 className="text-dark text-uppercase fw-bold border-0">Your shopping cart ({itemAmount}) </h3>
                        <button onClick={() => { setIsOpen(!isOpen) }} type="button" class="btn-close"></button>
                    </div>
                    <div className={style.body}>
                        {
                            cart.map(item => (
                                <CartItem item={item} key={item.id} />
                            ))
                        }
                    </div>
                    <div className={style.footer}>
                        <h4 className="text-uppercase">total price : $ {parseFloat(total).toFixed(2)} </h4>
                        <button onClick={clearCart} className="btn">
                        <BsTrash/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar