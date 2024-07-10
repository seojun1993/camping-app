import React, { useState } from 'react'
import Button from '../components/Button'
import showSvg from '../assets/images/login/show.svg';
import hideSvg from '../assets/images/login/hide.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwStatus, setPwStatus] = useState(false);

  const loginUser = (e) => {
    console.log(name, email, password)
    e.preventDefault();
    navigate('/');
  } 

  return (
    <div className='form-wrap'>
      <form onSubmit={(e) => {loginUser(e)}}>
        <div className='input-box signup-name'>
          <span>이름</span>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='input-box signup-email'>
          <span>이메일</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='input-box signup-pw'>
          <span>비밀번호</span>
          <input type={pwStatus ? 'text' : 'password'} maxLength={16} onChange={(e) => setPassword(e.target.value)}/>
          <span className='pw-status' onClick={() => setPwStatus(!pwStatus) }>
            <img src={pwStatus ? showSvg : hideSvg } alt="IMG" />
          </span>
        </div>

        <div className='btn-box'>
          <Button type='button' className='swiper-button-next' size={'lg'} bg={'blue'} radius={'lg'} shadow={'y'} txt={'Log in'} />
        </div>
      </form>
    </div>
  )
}

export default Login
