import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GuideImage1 from '../assets/images/guide/01.png';
import GuideImage2 from '../assets/images/guide/02.png';
import GuideImage3 from '../assets/images/guide/03.png';

const Guide = () => {
    let guideInfo = {
        bgSrc : [
            '../assets/images/guide/',
        ],
        title : [
            "Add trips", 
            "Discover", 
            "Invitations"
        ],
        desc : [
            "Easily add your create your trip, and let people know where you're heading.",
            "Discover where people are going, andjoin them on their trips.",
            "Ask people to join you on your trips."
        ],
    }
  return (
    <div>
      사이좋게 지내야 해용

      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {
            guideInfo.title.map((v, i) => {
            return <SwiperSlide>
                        <li>
                            <div className='img'>
                                <img src={GuideImage1} />
                                <img src={`${guideInfo.bgSrc[0]}0${i+1}.png`} alt={`Slide ${i + 1}`} />
                            </div>
                            <div className='txt'>
                                <h2>{guideInfo.title[i]}</h2>
                                <p>{guideInfo.desc[i]}</p>
                            </div>
                        </li>
                    </SwiperSlide>
                }
            )
        }

    </Swiper>
    </div>
  )
}

export default Guide
