import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RoutesIndex from 'routes';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const rqStore = React.createContext();
const {Provider} = rqStore;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider value={{queryClient}}>
        <div className="App">
          <BrowserRouter>
            <RoutesIndex />
          </BrowserRouter>
        </div>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
export {rqStore};
