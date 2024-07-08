import React, { useRef, useState } from 'react'
import '../assets/styles/page/guide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GuideImage1 from '../assets/images/guide/01.png';
import GuideImage2 from '../assets/images/guide/02.png';
import GuideImage3 from '../assets/images/guide/03.png';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Guide = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [swiperIdx, setSwiperIdx] = useState(0);
    const [btnTxt, setBtnTxt] = useState('Next');

    let guideInfo = {
        bg : [
            GuideImage1, 
            GuideImage2, 
            GuideImage3
        ],
        title : [
            "Add trips", 
            "Discover", 
            "Invitations"
        ],
        desc : [
            "Easily add your create your trip, and let people know where you're heading..",
            "Discover where people are going, and join them on their trips..",
            "Ask people to join you on your trips."
        ],
    }

    const nextEvent = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            let activeIndex = swiperRef.current.swiper.activeIndex;
            if(btnTxt === 'Next'){
                setSwiperIdx(activeIndex);
                swiperRef.current.swiper.slideTo(swiperIdx + 1);
            }else{
                navigate('/signup')
            }
        }
    }
    
  return (
    <div className='guide-wrap'>
        <div className="custom-pagination" style={{ width:'auto', position: 'absolute', top: '4rem', bottom: 'unset', left: '50%', transform: 'translateX(-50%)' }}></div>
      <Swiper
      ref={swiperRef}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
      }}
      onSlideChange={(e) => {
        e.activeIndex === e.slides.length - 1 ? setBtnTxt('Got it') : setBtnTxt('Next')
        setSwiperIdx(e.activeIndex);
      }}
    >
        {
            guideInfo.title.map((v, i) => {
            return <SwiperSlide key={i}>
                        <li>
                            <div className='img'>
                                <img src={guideInfo.bg[i]} alt='IMG'/>
                            </div>
                            <div className='txt'>
                                <h2 className='title'>{guideInfo.title[i]}</h2>
                                <p>{guideInfo.desc[i]}</p>
                            </div>
                        </li>
                    </SwiperSlide>
                }
            )
        }
    </Swiper>

    <div className='btn-box'>
    <Button className='swiper-button-next' size={'md'} bg={'rblue'} radius={'lg'} shadow={'N'} txt={btnTxt} event={nextEvent}/>
    </div>
    </div>
  )
}

export default Guide