import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Burger from './Pages/Sub/Burger';
import McLunch from './Pages/Sub/McLunch';
import Mcmorning from './Pages/Sub/Mcmorning';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/burger' element={<Burger />} />
          <Route exact path='/lunch' element={<McLunch />} />
          <Route exact path='/morning' element={<Mcmorning />} />
        </Routes>
    </div>
  );
}

export default App;
