import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/page/guide.css'
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Guide = () => {
    useEffect(() => {
        // 컴포넌트가 마운트 해제될 때 정리
        return () => {
            swiperRef.current = null;
        };
      }, []);

    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const [swiperIdx, setSwiperIdx] = useState(0);
    const [btnTxt, setBtnTxt] = useState('Next');

    let guideInfo = {
        bg : [],
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

    for (let i = 1; i <= 3; i++) {
        const guideImage = require(`../assets/images/guide/0${i}.png`);
        guideInfo.bg.push(guideImage);
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