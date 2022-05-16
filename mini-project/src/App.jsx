import Home from './pages/Home';
import News from './pages/News';
import Members from './pages/Members';
import NotFound from './pages/NotFound';

import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

import DetailMembers from './components/DetailMembers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <ApolloProvider client = {client}>
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<DetailMembers />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
    </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
