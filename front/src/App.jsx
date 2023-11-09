import './App.css';

/* hooks */
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { functionAllGames,functionAllGenres} from './redux/action';
import {useSelector,useDispatch} from 'react-redux';
import {useState, useEffect } from 'react';
/* RUTAS*/
import Cards from './components/Cards/Cards';
import Detail from './components/detail/Detail';
import Nav from './components/Nav/Nav';
import CreateGames from './components/createGames/createGames';

function App() {
    const dispatch =useDispatch();
    const allGames =useSelector((state)=>state.allGames)
    const filterGames =useSelector((state)=>state.filterGames)
  
  useEffect(()=>{
  dispatch(functionAllGames())
  dispatch(functionAllGenres())
  },[])
 
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Cards allGames={filterGames.length  == 0 ? allGames : filterGames }/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/newGame'  element={<CreateGames/>}/>
      </Routes>
    </div>
  );
}

export default App;
