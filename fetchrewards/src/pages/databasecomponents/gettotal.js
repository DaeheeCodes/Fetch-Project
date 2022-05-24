import { useEffect, useState } from "react";
import axios from 'axios';

export default function GetTotal() {

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
      return records.reduce(function (sum, record) {
        return sum + Math.floor(record.points);
    }, 0);
}