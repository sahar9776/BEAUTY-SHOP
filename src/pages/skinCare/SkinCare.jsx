import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import { ProductsContext } from '../../context/ProductsContext'
import { ScrollContext } from '../../context/ScrollContext'
import Loading from '../../components/loading/Loading'

function SkinCare() {
  const { tonerRef, essenseRef, creamRef, liftingCreamRef, lipBalmRef } = useContext(ScrollContext);
  const { products , isLoading } = useContext(ProductsContext);
  const toner = products.filter(item => {
    return item.tag === "toner"
  })
  const essense = products.filter(item => {
    return item.tag === "essense"
  })
  const cream = products.filter(item => {
    return item.tag === "cream"
  })
  const liftingCream = products.filter(item => {
    return item.tag === "lifting-cream"
  })
  const lipBalm = products.filter(item => {
    return item.tag === "lip-balm"
  })
  return (
    <div className='py-5' >
      <div className="container">
        {/* toner  */}
        <div className='w-100 py-5 mx-auto' ref={tonerRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">toner</h3>
          <div className='row'>
            {
              toner.map(item => {
                return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                  {
                    isLoading ? (<Loading />) : (<Product item={item} key={item.id} />)
                  }
                </div>
                )
              })
            }
          </div>
        </div>

        {/* essense  */}
        <div className='w-100 py-5 mx-auto' ref={essenseRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">essense</h3>
          <div className='row'>
            {
              essense.map(item => {
                return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                  {
                    isLoading ? (<Loading />) : (<Product item={item} key={item.id} />)
                  }                </div>
                )
              })
            }
          </div>
        </div>

        {/* cream  */}
        <div className='w-100 py-5 mx-auto' ref={creamRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">cream</h3>
          <div className='row'>
            {
              cream.map(item => {
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

        {/* lifting Cream  */}
        <div className='w-100 py-5 mx-auto' ref={liftingCreamRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">lifting Cream</h3>
          <div className='row'>
            {
              liftingCream.map(item => {
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

        {/* lip Balm  */}
        <div className='w-100 py-5 mx-auto' ref={lipBalmRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">lip balm</h3>
          <div className='row'>
            {
              lipBalm.map(item => {
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

export default SkinCare