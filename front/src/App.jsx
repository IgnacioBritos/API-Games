import './App.css';

/* hooks */
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { functionAllGames } from './redux/action';
import {useSelector,useDispatch} from 'react-redux'
import {useEffect } from 'react';
/* RUTAS*/
import Cards from './components/Cards/Cards';
import Detail from './components/detail/Detail';

function App() {
    const dispatch =useDispatch();
    const allGames =useSelector((state)=>state.allGames)
    useEffect(()=>{
      dispatch(functionAllGames())
    },[])
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Routes>
      <Route path='/home' element={<Cards allGames={allGames}/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
