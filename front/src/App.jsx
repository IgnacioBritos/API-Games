import './App.css';

/* hooks */
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { functionAllGames} from './redux/action';
import {useSelector,useDispatch} from 'react-redux';
import {useState, useEffect } from 'react';
/* RUTAS*/
import Cards from './components/Cards/Cards';
import Detail from './components/detail/Detail';
import Nav from './components/Nav/Nav';


function App() {
    const dispatch =useDispatch();
    const allGames =useSelector((state)=>state.allGames)
    const filterGames =useSelector((state)=>state.filterGames)
  
  useEffect(()=>{
  dispatch(functionAllGames())
  },[])

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Nav/>
      <Routes>
      <Route path='/home' element={<Cards allGames={filterGames.length  == 0 ? allGames : filterGames }/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
