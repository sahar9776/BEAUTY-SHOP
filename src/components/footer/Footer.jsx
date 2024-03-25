import React from 'react';
import style from './footer.module.css';
import { Link } from 'react-router-dom';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="text-start">
                            <h3 className="text-uppercase fw-bold mb-2">contact me</h3>
                            <ul className="">
                                <li className=""> <span className="fw-bold text-uppercase">address :</span> United States, Texas, Dallas, W. Carpenter Fwy</li>
                                <li className=""><span className="fw-bold text-uppercase">number :</span> 347824911321003</li>
                                <li className=""><span className="fw-bold text-uppercase">email :</span> sahar1376@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="text-center">
                            <Link className="text-uppercase text-decoration-none fw-bold" to={"/"} style={{ fontSize: '40px', color: '#000' }}>Beauty Shop</Link>
                            <p className="text-secondary" style={{ fontSize: '14px' }} >(logo/site Title)</p>
                            <div className="d-flex justify-content-center mt-5 mt-md-2">
                                <Link >
                                    <FaInstagram className='text-danger' />
                                </Link>
                                <Link >
                                    <PiTelegramLogoBold className='text-primary mx-3' />
                                </Link>
                                <Link >
                                    <BsWhatsapp className='text-success' />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer