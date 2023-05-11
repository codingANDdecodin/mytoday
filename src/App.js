import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Table1 from './Tables/Table1.js';
import Table2 from './Tables/Table2';
import Navbar from './mynav/Navbar';



function App() {
  const [listData,setListData]=useState([]);

  const fetchDataHandler=async()=>{
    const apiData=await fetch("https://fakestoreapi.com/products/");
    const orignalData= await apiData.json(); 
    setListData(orignalData)
  }


  return (
    <div className="App">
    <button onClick={fetchDataHandler}>get data from api</button>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Table1 listData={listData}></Table1>}></Route>
      <Route path='/table2' element={<Table2  listData={listData}></Table2>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
