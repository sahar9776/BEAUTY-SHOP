import React from 'react'
import store from '../../assets/images/store.jpg'
import { NavLink } from 'react-router-dom'

function AboutUs() {
  return (
    <div className='mx-auto text-center py-5'>
      <div className="container">
        <img src={store} alt="store pic" className="img-thumbnail rounded-circle" />
        <p className="mt-3 mb-5 lead text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis aut minus in autem quibusdam mollitia necessitatibus sunt itaque nihil fuga odit cupiditate explicabo accusantium veritatis reiciendis illum dignissimos sequi, vero quae officia inventore. Sunt, alias veniam. Quod veritatis in architecto. Rem consequatur cupiditate voluptate? Dignissimos similique maiores odio? Officia?
        </p>
        <div className="row py-5">
          <div className="col-12 col-lg-4">
            <div className="card mb-3 w-100">
              <div className="card-body px-3">
                <h5 className="card-title text-uppercase border-bottom py-1">activity</h5>
                <p className="card-text pt-2 pb-5 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a atque quia dolorum rerum officiis, eligendi quam illo porro ipsam maiores, amet veritatis, tempora dolorem.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card mb-3 w-100">
              <div className="card-body px-3">
                <h5 className="card-title text-uppercase border-bottom py-1">activity</h5>
                <p className="card-text pt-2 pb-5 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a atque quia dolorum rerum officiis, eligendi quam illo porro ipsam maiores, amet veritatis, tempora dolorem.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card mb-3 w-100">
              <div className="card-body px-3">
                <h5 className="card-title text-uppercase border-bottom py-1">activity</h5>
                <p className="card-text pt-2 pb-5 text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a atque quia dolorum rerum officiis, eligendi quam illo porro ipsam maiores, amet veritatis, tempora dolorem.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs