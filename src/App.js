import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Component/Home/Home';
import Deshboard from './Component/Deshboard/Deshboard';
import Reviews from './Component/Reviews/Reviews';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/deshboard'>DeshBoard</Link>
      <Link to='/reviews'>Reviews</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/deshboard' element={<Deshboard />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
