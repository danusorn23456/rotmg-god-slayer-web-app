
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Routes } from './router';

// Create a client
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnReconnect:false,
      refetchOnMount:false
    }
  }
})

function App() {
  return <QueryClientProvider client={queryClient}>
     <Routes/>
</QueryClientProvider>
}

export default App;
