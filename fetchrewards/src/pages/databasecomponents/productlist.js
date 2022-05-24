import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./productlist.css"
import ProcessPayment from "./ProcessPayment";
import GetTotal from "./gettotal";

//constructor comes first to load the function
const Productmaker = (props) => 
(
  <div className={`productWrapper`}>
                    <div className={'productHeader'} >
                    <img className="banner" src={`${props.record.image}`} alt="productimg"/>
                        <div className={'productInfo'}>
                            <h2 className="productName">{props.record.name}</h2>
                        </div>
                        <p className={'postText'}/><p>{props.record.detail}</p>
                        <p className="points">{props.record.points}</p>
                        </div>
                        <button onClick={ProcessPayment}>Quick Buy</button>
                </div>
);

//export productlist
export default function ProductList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the "server", for "databases" stored in local library public.
 //super easy to use mongoose to create schemes to load into react if i need to connect to mongodb.

 useEffect(() => {
  async function getRecords() {
    const response = await axios.get("productlist.json");
    const records = response.data
    setRecords(records);
  }

  getRecords();

   return;
 }, [records.length]);

 // sorts the product by increasing point value. can be other things like "Popularity Ranking", if my database was big enough.
 const sortedProduct = records.sort((a, b) => {
  return ((a.points)- (b.points));
})



 // This method will run ProductMaker for the amount of records there are.
 function products() {
   return sortedProduct.map((record) => {
     
     return (
       <Productmaker
         record={record}
         key={record.name}
       />
     );
   });
 }
 


 
 //Math.floor easily turns strings into integers


 // This following section will display the table with the records of products.
 return (
   <div className= "background" style={{ maxHeight: '100vh', overflowY:'auto'}}>
       <div>{products()}</div>
   </div>
 );
}
