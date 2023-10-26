import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail, Home } from './routes';
import { DetailPage, HomePage } from './pages';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Home} element={<HomePage />} />
          <Route path={Detail} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
