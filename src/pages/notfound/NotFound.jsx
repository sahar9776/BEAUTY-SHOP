import React from 'react'
import { Link } from 'react-router-dom'
import {LuArrowLeftCircle} from 'react-icons/lu'
import {TbError404} from 'react-icons/tb'

function NotFound() {
    return (
        <div style={{ height: '400px' }}>
            <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                <TbError404 className='border border-2 border-dark rounded-circle p-2' style={{fontSize:'60px',width:'120px',height:'120px'}} />
                <h1 className="text-uppercase mt-3 mb-5">page not found</h1>
                <Link to={'/'} className=' text-decoration-none text-secondary'>
                        <LuArrowLeftCircle className='mx-2' style={{fontSize:'30px'}} />back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound