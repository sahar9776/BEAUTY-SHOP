import React, { useContext } from 'react';
import style from './products.module.css';
import { ProductsContext } from '../../context/ProductsContext';
import Product from '../product/Product';
import Loading from '../loading/Loading';

function Products() {
    const { products, isLoading } = useContext(ProductsContext);
    const filterProducts = products.filter(item => {
        return item.id % 4 === 0
    })
    return (
        <div className='w-100 py-5 mx-auto'>
            <h3 className="text-uppercase py-1 mb-4 text-secondary">products</h3>
            <div className='row'>
                {
                    filterProducts.map(item => {
                        return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                          {  isLoading ? (<Loading />):(
                            <Product item={item} key={item.id} />
                            )}
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products