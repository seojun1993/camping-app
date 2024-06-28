import React from 'react'
import nowWeather from '../api/weather'

const Header = () => {

    console.log(nowWeather);
  return (
      <header>
        <div>
            <ul>
                <li>9:41</li>
                <li></li>
            </ul>
        </div>
      </header>
  )
}

export default Header
