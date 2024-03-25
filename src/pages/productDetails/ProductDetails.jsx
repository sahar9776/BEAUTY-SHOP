import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6'
import style from './productDetails.module.css'
import { CartContext } from '../../context/CartContext';


function ProductDetails() {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find(item => item.id === parseInt(id));
    const { imageUrl, price, description, tag, title } = product || {};
    const {addToCart}=useContext(CartContext);
    return (
        <div className={style.productDetails}>
            <div className="container">
                <div className="card border-0 mb-3 w-100">
                    <div className="row g-0">
                        <div className="col-12 col-md-4 text-center">
                            <div className={style.boxImg}>
                            <img src={imageUrl} className="img-fluid rounded" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-8 px-2">
                            <div className="card-body">
                                <h2 className="card-title mb-2">{title}</h2>
                                <p className="card-text text-danger fw-bold">$ {price} </p>
                                <p className="card-text text-secondary lead"> {description} </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link className="card-text text-secondary text-decoration-none"># {tag} </Link>
                                    <button onClick={()=>{addToCart(product,product.id)}} className="btn btn-warning">
                                        <FaPlus className='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails