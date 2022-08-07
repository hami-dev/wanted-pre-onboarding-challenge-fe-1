import {BrowserRouter} from 'react-router-dom';
import RoutesIndex from 'routes';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <RoutesIndex />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
