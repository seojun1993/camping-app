import {Routes, Route} from 'react-router-dom';
import './assets/styles/common/reset.css';
import './assets/styles/common/font.css';
import './assets/styles/common/common.css';
import Login from './page/Login';
import Button from './assets/styles/component/Button';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Login />
        <Button disabled={true} size={'lg'} variant={'success'} children={'BUTTON'} />
      </div>
    </div>
  );
}

export default App;
