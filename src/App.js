import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Burger from './Pages/Sub/Burger';
import McLunch from './Pages/Sub/McLunch';
import Mcmorning from './Pages/Sub/Mcmorning';
import HappySnack from './Pages/Sub/HappySnack';
import Dessert from './Pages/Sub/Dessert';
import McCafe from './Pages/Sub/McCafe';
import Happymeal from './Pages/Sub/Happymeal';
import WhatsNews from './Pages/Sub/WhatsNews';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/burger' element={<Burger />} />
          <Route exact path='/lunch' element={<McLunch />} />
          <Route exact path='/morning' element={<Mcmorning />} />
          <Route exact path='/snack' element={<HappySnack />} />
          <Route exact path='/dessert' element={<Dessert />} />
          <Route exact path='/cafe' element={<McCafe />} />
          <Route exact path='/happy' element={<Happymeal />} />
          <Route exact path='/whats' element={<WhatsNews />} />
        </Routes>
    </div>
  );
}

export default App;
