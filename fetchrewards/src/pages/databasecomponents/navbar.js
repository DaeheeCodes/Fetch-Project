import React, { useEffect, useState } from "react";
import axios from 'axios';
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {

    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the "database", stored in local library public.
    useEffect(() => {
     async function getRecords() {
       const response = await axios.get("points.json");
       const records = response.data
       setRecords(records);
     }
   
     getRecords();
   
      return;
    }, [records.length]);
    function remainingpoints() {
      return records.reduce(function (sum, record) {
        return sum + Math.floor(record.points);
    }, 0);
    }




 return (
   <div>
     <nav>
       <NavLink to="/admin">
       <img style={{"width" : 25 + '%'}} src="https://www.fetchrewards.com/assets/images/logos/header-logo.png" alt="sometext"></img>
       </NavLink>
       <div>
         <ul>
           <h4> Your Total Points! {remainingpoints()}</h4>
           <li>
             <NavLink to="/admin/create">
               View Your Points Log!
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}