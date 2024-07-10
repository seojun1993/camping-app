import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import '../assets/styles/page/login.css';

const Landing = () => {

  return (
    <div className='login-box'>
        <div className='login-heading-box'>
            <h2 className='heading'>Camper</h2>
            <span className='sb'>자연에서 행복한 추억을 만들어 보세요.</span>
        </div>
        <div className='login-btn-box'>
          <Link to="/guide"><Button size={'lg'} bg={'white'} radius={'lg'} shadow={'y'} txt={'회원가입'} /></Link>
          <Link to="/login"><Button size={'lg'} bg={'blue'} radius={'lg'} shadow={'y'} txt={'로그인'} /></Link>
        </div>
    </div>
  )
}

export default Landing
