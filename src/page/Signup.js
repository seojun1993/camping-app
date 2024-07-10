import React, { useState } from 'react'
import '../assets/styles/page/signup.css'
import Button from '../components/Button'
import showSvg from '../assets/images/login/show.svg';
import hideSvg from '../assets/images/login/hide.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [chkPassword, setChkPassword] = useState('');
  const [pwStatus, setPwStatus] = useState(false);
  const [chkPwStatus, setChkPwStatus] = useState(false);
  const [pwComparison, setPwComparison] = useState(false);

  const changeStatus = (index) => {
    index === 0 ? setPwStatus(!pwStatus) : setChkPwStatus(!chkPwStatus)
  }

  const changeChkPassword = (e) => {
    setChkPassword(e.target.value)
  }

  const signUpUser = (e) => {
    console.log(name, email, password, chkPassword)
    e.preventDefault();
    navigate('/');
  } 

  return (
    <div className='form-wrap'>
      <form onSubmit={(e) => {signUpUser(e)}}>
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
          <span className='pw-status' onClick={() => changeStatus(0)}>
            <img src={pwStatus ? showSvg : hideSvg } alt="IMG" />
          </span>
        </div>

        <div className='input-box signup-pw'>
          <span>비밀번호 확인</span>
          <input type={chkPwStatus ? 'text' : 'password'} maxLength={16} onChange={(e) => changeChkPassword(e)}/>
          <span className='pw-status' onClick={() => changeStatus(1)}>
            <img src={chkPwStatus ? showSvg : hideSvg } alt="IMG" />
          </span>
        </div>

        <div className='btn-box'>
          <Button type='button' className='swiper-button-next' size={'lg'} bg={'blue'} radius={'lg'} shadow={'y'} txt={'Sign up'} />
        </div>
      </form>
    </div>
  )
}

export default Signup
