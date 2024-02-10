import React from 'react';
import './Menu.css';

import features from '../utils/img/Frame 4.jpg';



function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Features</h1>
                </div>
            </header>
            <div className='breakfast my-5'>
                <div className='container-fluid'>
                <img src={features} className='img-fluid w-100' alt="features" />
                </div>
            </div>

            
        </div>
    )
}

export default Menu;