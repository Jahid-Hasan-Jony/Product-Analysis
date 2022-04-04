import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
import Deshboard from './Component/Deshboard/Deshboard';
import Reviews from './Component/Reviews/Reviews';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';
import Header from './Component/Header/Header';
import Blog from './Component/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/deshboard' element={<Deshboard />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
