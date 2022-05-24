import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Record = (props) => (
 <tr>
   <td>{props.record.photo}</td>
   <td>{props.record.title}</td>
   <td>{props.record.date}</td>
   <td>{props.record.content}</td>
   <td>{props.record.postnumber}</td>
   <td>
     <Link className="btn btn-link" to={`/admin/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await axios.get('/blogpost');
     const records = response.data
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
  const response = await axios(`/blogpost/delete:${id}`);
  const records = response.data;
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="recordcontainer" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Photo</th>
           <th>Title</th>
           <th>Date</th>
           <th>Content</th>
           <th>Postnumber</th>
           <th></th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}