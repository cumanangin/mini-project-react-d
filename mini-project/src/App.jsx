import Home from './pages/Home';
import News from './pages/News';
import Members from './pages/Members';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/members" element={<Members />} />
              {/*<Route path="*" element={<NotFound />} /> */}
          </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
