import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import { ProductsContext } from '../../context/ProductsContext'
import { ScrollContext } from '../../context/ScrollContext'
import Loading from '../../components/loading/Loading'

function Cosmetic() {
  const {  concealerRef, sunCreamRef, eyeLinearRef, mascaraRef, eyeShadowRef, lipStickRef, rougeRef } = useContext(ScrollContext);
  const { products , isLoading } = useContext(ProductsContext);
  const concealer = products.filter(item => {
    return item.tag === "concealer"
  })
  const SunCream = products.filter(item => {
    return item.tag === "sun-cream"
  })
  const eyeLinear = products.filter(item => {
    return item.tag === "eye-Linear"
  })
  const mascara = products.filter(item => {
    return item.tag === "mascara"
  })
  const eyeShadow = products.filter(item => {
    return item.tag === "eye-shadow"
  })
  const lipStick = products.filter(item => {
    return item.tag === "lip-stick"
  })
  const rouge = products.filter(item => {
    return item.tag === "rouge"
  })
  return (
    <div className='py-5' >
      <div className="container">
        {/* concealer  */}
        <div className='w-100 py-5 mx-auto' ref={concealerRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">concealer</h3>
          <div className='row'>
            {
              concealer.map(item => {
                return (<div className="col-12 col-md-6 col-lg-4 col-xl-3 my-5" key={item.id}>
                  <Product item={item} key={item.id} />
                </div>
                )
              })
            }
          </div>
        </div>

        {/* Sun Cream  */}
        <div className='w-100 py-5 mx-auto' ref={sunCreamRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">Sun Cream</h3>
          <div className='row'>
            {
              SunCream.map(item => {
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

        {/* eye Linear  */}
        <div className='w-100 py-5 mx-auto' ref={eyeLinearRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">eye Linear</h3>
          <div className='row'>
            {
              eyeLinear.map(item => {
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

        {/* mascara  */}
        <div className='w-100 py-5 mx-auto' ref={mascaraRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">mascara</h3>
          <div className='row'>
            {
              mascara.map(item => {
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

        {/* eye shadow  */}
        <div className='w-100 py-5 mx-auto' ref={eyeShadowRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">eye shadow</h3>
          <div className='row'>
            {
              eyeShadow.map(item => {
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

        {/* lip stick  */}
        <div className='w-100 py-5 mx-auto' ref={lipStickRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">lip stick</h3>
          <div className='row'>
            {
              lipStick.map(item => {
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

        {/* rouge  */}
        <div className='w-100 py-5 mx-auto' ref={rougeRef}>
          <h3 className="text-uppercase py-1 mb-4 text-secondary">rouge</h3>
          <div className='row'>
            {
              rouge.map(item => {
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

export default Cosmetic