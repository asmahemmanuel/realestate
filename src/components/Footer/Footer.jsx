import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerwidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src='./logo2.png' alt='' width={200} />

                <span className='primaryText'>Mission Statement</span>
                <span className="secondaryText">Emmakad Real Estate Agency is dedicated <br />
                to providing unparalleled real estate <br />
                services in Kasoa and its environs. <br />Our mission is to assist clients in finding their <br />
                dream homes, lucrative investment opportunities, <br />and ideal commercial spaces 
                by delivering <br />exceptional service, transparency, and expertise.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>P870 HOLA ST, Opeikuma, Kasoa - Ghana</span>

          <span class="copyright">
              Copyright - 2024 iFire Creations | All Rights Reserved
          </span>

                {/* <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div> */}
            </div>
         </div>
        </section>
        
    );
};

export default Footer;