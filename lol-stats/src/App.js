import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/home'element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
