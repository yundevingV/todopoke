import {Route , Routes} from 'react-router-dom'

import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'


import Header from './pages/header/Header'

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* 테스트 */}
          <Route path="/Header" element={<Header />} />
          

    </Routes>
  );
}

export default App;
