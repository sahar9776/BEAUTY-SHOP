import React from 'react';
import style from './home.module.css';
import Banner from '../../components/banner/Banner';
import Products from '../../components/products/Products';
import Category from '../../components/category/Category';
import Brands from '../../components/brands/Brands';

function Home() {
  return (
    <div className={style.home}>
      {/* Banner  */}
      <Banner />
      <div className="container">
        {/* Category  */}
        <Category />
        {/* Products */}
        <Products />
        {/* Barnds  */}
        <Brands/>
      </div>
    </div>
  )
}

export default Home