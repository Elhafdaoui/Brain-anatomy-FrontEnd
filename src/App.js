import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Canvas } from './pages/Canvas';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Canvas/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
