import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import { ProductsContext } from '../../context/ProductsContext'
import { ScrollContext } from '../../context/ScrollContext'
import Loading from '../../components/loading/Loading'

function HairCare() {
  const { shampooRef, hairMaskRef } = useContext(ScrollContext);
  const { products , isLoading } = useContext(ProductsContext);
  const shampoo = products.filter(item => {
    return item.tag === "shampoo"
  })
  const hairMask = products.filter(item => {
    return item.tag === "hair-mask"
  })
  return (
    <div className='py-5' >
      <div className="container">
        {/* shampoo  */}
        <div className='w-100 py-5 mx-auto' ref={shampooRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">shampoo</h3>
          <div className='row'>
            {
              shampoo.map(item => {
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
        {/* hair mask  */}
        <div className='w-100 py-5 mx-auto' ref={hairMaskRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">hair mask</h3>
          <div className='row'>
            {
              hairMask.map(item => {
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

export default HairCare