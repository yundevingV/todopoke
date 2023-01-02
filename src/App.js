import {Route , Routes} from 'react-router-dom'

import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'

import Header from './pages/header/Header'
function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          
          {/* 테스트 */}
          <Route path="/Header" element={<Header />} />
    </Routes>
  );
}

export default App;
