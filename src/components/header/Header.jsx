import React, { useContext } from 'react';
import style from './header.module.css';
import { BsBag } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../../context/SidebarContext';
import { CartContext } from '../../context/CartContext';
import { ScrollContext } from '../../context/ScrollContext';

function Header() {
    const { setIsOpen, isOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    const { handleScroll, mensRef, womensRef, tonerRef, essenseRef, creamRef, liftingCreamRef, lipBalmRef, shampooRef, hairMaskRef, concealerRef, sunCreamRef, eyeLinearRef, mascaraRef, eyeShadowRef, lipStickRef, rougeRef } = useContext(ScrollContext);
    return (
        <div className={style.header}>
            <div className="container d-flex justify-content-baseline align-items-start py-3 align-items-lg-center pt-lg-0">
                <nav className="navbar navbar-dark navbar-expand-lg w-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse py-3 py-lg-0" id="navbarSupportedContent">
                        <NavLink className="navbar-brand text-uppercase " to={"/"} style={{fontSize:'26px',color:'#ffc107'}}>Beauty Shop</NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2 p-lg-0">
                            {/* skin care  */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                    Skin care
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/skin-care'} onClick={() => handleScroll(tonerRef)} >Skin toner</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/skin-care'} onClick={() => handleScroll(essenseRef)} >essense</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/skin-care'} onClick={() => handleScroll(creamRef)} > cream </NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/skin-care'} onClick={() => handleScroll(liftingCreamRef)} > lifting cream </NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/skin-care'} onClick={() => handleScroll(lipBalmRef)} > lip balm </NavLink></li>
                                </ul>
                            </li>
                            {/* hair care  */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                    hair care
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/hair-care'} onClick={() => handleScroll(shampooRef)}>shampoo</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/hair-care'} onClick={() => handleScroll(hairMaskRef)}> hair mask</NavLink></li>
                                </ul>
                            </li>
                            {/* cosmetic */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                    cosmetic
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(concealerRef)}>Concealer</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(sunCreamRef)}>sun cream</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(eyeLinearRef)}>eye linear</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(mascaraRef)}>mascara</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(eyeShadowRef)}>Eye Shadow</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(lipStickRef)}>lip stick</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/cosmetic'} onClick={()=>handleScroll(rougeRef)}>Rouge</NavLink></li>
                                </ul>
                            </li>
                            {/* perfume  */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown">
                                    perfume
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/perfume'} onClick={() => handleScroll(womensRef)} >women's perfume</NavLink></li>
                                    <li><NavLink id='bgItem' className="dropdown-item text-uppercase" to={'/perfume'} onClick={() => handleScroll(mensRef)} >men's perfume</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div onClick={() => { setIsOpen(!isOpen) }} className={style.cart}>
                    <BsBag className={style.bsBag} />
                    <div className={style.subCart}>{itemAmount}</div>
                </div>
            </div >
        </div>
    )
}

export default Header

