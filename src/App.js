import './App.css';
import Homepage from './page/Homepage';
import Loginpage from './page/Loginpage';
import Mypage from './page/Mypage';
import Recipepage from './page/Recipepage';
import Writingpage from './page/Writingpage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/my' element={<Mypage />}/>
      <Route path='/recipe' element={<Recipepage />}/>
      <Route path='/writing' element={<Writingpage />}/>
      <Route path='/login' element={<Loginpage />}/>
    </Routes>
  </div>
    );
}

export default App;
