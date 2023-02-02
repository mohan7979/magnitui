import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Location/> } />
      </Routes>
    </div>
  );
}

export default App;
