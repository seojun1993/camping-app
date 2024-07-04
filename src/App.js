import {Routes, Route} from 'react-router-dom';
import './assets/styles/common/reset.css';
import './assets/styles/common/font.css';
import './assets/styles/common/common.css';
import Landing from './page/Landing';
import Login from './page/Login';
import Signup from './page/Signup';
import Guide from './page/Guide'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={ <Landing /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup/>}/>
          <Route path='/guide' element={ <Guide/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

