import {BrowserRouter} from 'react-router-dom';
import RoutesIndex from 'routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
