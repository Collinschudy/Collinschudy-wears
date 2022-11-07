import React from 'react';

import './homepage.styles.css'



const HomePage = () => (
    <div className='homePage'>
        <div className='directory-menu'>
            {/* <div className="wrapper"> */}
                <div className='menu-item box1'>
                    <div className='content'>
                        <h2 className='title'>HATS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item box2'>
                    <div className='content'>
                        <h2 className='title'>WOMENS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item box3'>
                    <div className='content'>
                        <h2 className='title'>MENS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="wrapper2"> */}
                <div className='menu-item box4'>
                    <div className='content'>
                        <h2 className='title'>SNEAKERS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item box5'>
                    <div className='content'>
                        <h2 className='title'>JACKETS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>

)

export default HomePage;