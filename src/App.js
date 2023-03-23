import './App.css';

import { useState } from 'react';

import Login from './pages/login';
import Welcome from './pages/home';

function App() {
  const [page, setPage] = useState('login')
  return (
    
    <div className="App">
      {
        page == 'login' ? <Login redirect={(e) => setPage(e)}/> : <Welcome/>
      }
      
    </div>
  );
}

export default App;
