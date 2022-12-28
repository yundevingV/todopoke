import {Route , Routes} from 'react-router-dom'

import SignUp from './pages/SignUp'

function App() {
  return (
    <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          
    </Routes>
  );
}

export default App;
