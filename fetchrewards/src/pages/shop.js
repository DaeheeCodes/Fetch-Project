import React from "react";
import './admin.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./databasecomponents/navbar.js";
import ProductList from "./databasecomponents/productlist.js";


const Shop = () => {
 return (
   <div className="admincontainer">
     <Navbar />
     <Routes>
       <Route exact path="/" element={<ProductList />} />
     </Routes>
   </div>
 );
};

export default Shop;
