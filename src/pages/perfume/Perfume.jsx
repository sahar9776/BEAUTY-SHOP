import React, { useContext } from 'react';
import Product from '../../components/product/Product';
import { ProductsContext } from '../../context/ProductsContext';
import { ScrollContext } from '../../context/ScrollContext';
import Loading from '../../components/loading/Loading';

function Perfume() {
  const {   mensRef , womensRef} = useContext(ScrollContext);
  const { products,isLoading } = useContext(ProductsContext);
  const womensPerfume = products.filter(item => {
    return item.tag === "women's-perfume"
  })
  const mensPerfume = products.filter(item => {
    return item.tag === "men's-perfume"
  })
  return (
    <div className='py-5' >
      <div className="container">
        {/* Women's Perfume  */}
        <div className='w-100 py-5 mx-auto' ref={womensRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">women's perfume</h3>
          <div className='row'>
            {
              womensPerfume.map(item => {
                return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                  {
                    isLoading ? (<Loading/> ): (<Product item={item} key={item.id} />)
                  }
                </div>
                )
              })
            }
          </div>
        </div>
        {/* Men's Perfume  */}
        <div className='w-100 py-5 mx-auto' ref={mensRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">men's perfume</h3>
          <div className='row'>
            {
              mensPerfume.map(item => {
                return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                   {
                    isLoading ? (<Loading/> ): (<Product item={item} key={item.id} />)
                  }
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfume