import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
