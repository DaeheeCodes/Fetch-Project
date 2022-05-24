import React from "react";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {


/*originally wnated to render remaining points in the navbar but decided not to for 
more capababilities inside the uesr interated app
    const [records, setRecords] = useState([]);
    
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
 */



 return (
   <div>
     <nav>
       <NavLink to="/shop">
       <img style={{"width" : 25 + '%'}} src="https://www.fetchrewards.com/assets/images/logos/header-logo.png" alt="sometext"></img>
       </NavLink>
       <div>
         <ul>
           <li>
             <NavLink to="/shop/changelog">
               View Your Points Log!
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}