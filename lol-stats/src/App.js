import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Results from './pages/Results/Results.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/result/:summoner'element={<Results/>}/>
          <Route path='/home'element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
