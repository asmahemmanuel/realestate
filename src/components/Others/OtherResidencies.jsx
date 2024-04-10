import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import '.././Others/OtherResidencies.css';
import data from '../../utils/slider2.json';
import { SliderSettings } from '../../utils/common';
const OtherResidencies = () => {
    return (
        <section className="r-wrapper" id='others'>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Other Choices</span>
                    <span className='primaryText'>Others</span>
                </div>

                <Swiper {...SliderSettings}>
                    <SliderButtons/>
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt='home' />

                                    <span className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OtherResidencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-buttons'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};