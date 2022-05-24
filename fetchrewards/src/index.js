import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {render} from 'react-dom';
import InsideSidebar from './InsideSidebar.js';
import Admin from './pages/admin.js';
import Shop from './pages/shop.js';


const rootElement = document.getElementById("root")

/* 
Uses React Router v6 Outlet to declare pages insidesidebar, I can just load the whole page directly on to it but I learned that
having a separate redirect is better for scale if i want to have apps that do not use my Sidebar
So <SideBar /> <Outlet /> becomes <SideBar /> - <Route/>..
*/


// both landing "/" and "/shop" goes to Shop app

render(
  <BrowserRouter>
    <Routes>
      <Route element={<InsideSidebar />} className="contents">
      <Route exact path="/" element={<Shop />}/> 
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/admin/*" element={<Admin /> }/>
    </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);



//Below from React
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
