import React, { useEffect, useState } from 'react'
import style from './backToTop.module.css'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {showTopBtn && (<FaArrowUp className={style.backTop} onClick={goToTop} />)}
        </div>
    );
}

export default BackToTop