import React from 'react'
import { Link } from 'react-router-dom';
import style from './brands.module.css'

function Brands() {
    return (
        <div className='w-100 py-5 mx-auto my-5'>
           <h3 className="text-uppercase py-1 mb-5 text-secondary">brands</h3>
            <div className="d-flex justify-content-between align-items-center shadow w-100 p-5">
                <div className={style.brand}>
                    <Link className="text-uppercase text-dark text-decoration-none h4">
                        chanel
                    </Link>
                </div>
                <div className={style.brand}>
                    <Link className="text-uppercase text-dark text-decoration-none h4">
                        jaguar
                    </Link>
                </div>
                <div className={style.brand}>
                    <Link className="text-uppercase text-dark text-decoration-none h4">
                        money
                    </Link>
                </div>
                <div className={style.brand}>
                    <Link className="text-uppercase text-dark text-decoration-none h4">
                        gisuo
                    </Link>
                </div>
                <div className={style.brand}>
                    <Link className="text-uppercase text-dark text-decoration-none h4">
                        nourish
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Brands