import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Results from './pages/Results/Results.jsx';
import Home from './pages/Home/Home.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/result/:summoner'element={<Results/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/'element={<Home/>}/>
          <Route path='/Leaderboard'element={<Leaderboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
