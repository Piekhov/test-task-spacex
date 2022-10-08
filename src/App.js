import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SingIn from './auth/SingIn';
import SingUp from './auth/SingUp';
import CarouselElement from './components/CarouselElement';
import CarouselImages from './components/CarouselImages';
import Header from './components/Header';
import NavbarMenu from './components/NavbarMenu';
import { fetchDragons } from './store/dragonSlice';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  },[]);


  return (
    <div className='container__grid'>
      <Header/>
      <NavbarMenu/>
      <Routes>
        <Route path="/" element={<CarouselImages/>}/>
        <Route path="/login" element={<SingIn/>}/>
        <Route path="/register" element={<SingUp/>}/>
        <Route path="/dragons/:id" element={<CarouselElement/>}/>
      </Routes>
    </div>

  );
}

export default App;
