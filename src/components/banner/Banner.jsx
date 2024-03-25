import React from 'react';
import style from './banner.module.css';
import { Link } from 'react-router-dom';
import bannerOne from '../../assets/images/banner1.jpg'
import bannerTwo from '../../assets/images/banner2.jpg'

function Banner() {
  return (
    <div className={style.banner}>
      <div className="container py-5">
        <div className="row">
          {/* section left  */}
          <div className="col-12 col-lg-7 text-start ">
            <div className={style.bannerLeft}>
              <h1 className="text-uppercase">
                beauty Care
              </h1>
              <p className=" text-light mt-3 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quaerat rerum consequatur magni nemo ullam!
              </p>
              {/* Buttons  */}
              <div className='mt-3'>
                <Link to={'/'} className='btn btn-light btn-lg mx-1'>Beauty Club </Link>
                <Link to={'/about'} className='btn btn-outline-light btn-lg mx-1'>About Us </Link>
              </div>
            </div>
          </div>
          {/* section right  */}
          <div className="col-12 col-lg-5 d-none d-lg-block">
            <div className={style.bannerRight}>
              <div className={style.imageOne}>
                <img src={bannerOne} alt="" className="img-fluid" />
              </div>
              <div className={style.imageTwo}>
                <img src={bannerTwo} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner