import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./changelog.css"

const History = (props) => (
 <tr>
   <td>{props.record.payer}</td>
   <td>{props.record.points}</td>
   <td>{props.record.timestamp}</td>
 </tr>
);
 
export default function ChangeLog() {
 const [history, setHistory] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getHistory() {
     const response = await axios.get("../points.json");
     const history = response.data
     setHistory(history);
   }
 
   getHistory();
 
   return;
 }, [history.length]);

 const sortedHistory = history.sort((a, b) => {
  return (new Date(a.timestamp)- new Date(b.timestamp));
})

 // This method will map out the records on the table
 function historyList() {
   return sortedHistory.map((record) => {
     return (
       <History
         record={record}
         key={record.payer}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Purchase History</h3>
     <table className="recordcontainer" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Company</th>
           <th>Points</th>
           <th>Date</th>
         </tr>
       </thead>
       <tbody>{historyList()}</tbody>
     </table>
   </div>
 );
}