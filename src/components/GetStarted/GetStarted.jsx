import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="g-wrapper" id='getStarted'>
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started With EMMAKAD</span>
                    <span className='secondaryText'>
                        Subscribe and find super attractive price quotes from us.
                        <br/>
                        Find your residence soon.
                    </span>
                    <button className='button'>
                        <a href='mailto:emmakad1940@gmail.com'>Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;