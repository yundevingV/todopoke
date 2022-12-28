import {Route , Routes} from 'react-router-dom'

import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          
    </Routes>
  );
}

export default App;
