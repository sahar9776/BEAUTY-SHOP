import React, { useContext } from 'react';
import style from './category.module.css';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';

function Category() {
  const {category}=useContext(CategoryContext);
  return (
    <div className='w-100 py-5 mx-auto'>
      <h3 className="text-uppercase py-1 mb-4 text-secondary">Categories</h3>
      <div className="row">
        {
          category.map(item => (
            <div className="col-12 col-md-6 col-lg-3 text-center my-3" key={item.id}>
              <Link className={style.boxCategorey} to={item.pageLink}>
                <img src={item.imgUrl} alt="" className="img-fluid h-100" />
                <div to={''} className={style.subCategory}> {item.name} </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category