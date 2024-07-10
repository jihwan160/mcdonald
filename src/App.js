import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Burger from './Pages/Sub/Burger';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/burger' element={<Burger />} />
        </Routes>
    </div>
  );
}

export default App;
