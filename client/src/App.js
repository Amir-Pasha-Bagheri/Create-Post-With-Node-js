import { Router } from 'react-router';
import Routes from './Pages/Routes'
import history from './Pages/history'


function App() {
  return (
    <Router history={history}>
        <Routes/>
    </Router>
  );
}

export default App;
