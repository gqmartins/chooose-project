import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail, Home } from './routes';
import { DetailPageContainer, HomePageContainer } from './pages';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Home} element={<HomePageContainer />} />
          <Route path={Detail} element={<DetailPageContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
