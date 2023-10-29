import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail, Home } from './routes';
import { DetailPageContainer, HomePageContainer } from './pages';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={Home} element={<HomePageContainer />} />
            <Route path={Detail} element={<DetailPageContainer />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
