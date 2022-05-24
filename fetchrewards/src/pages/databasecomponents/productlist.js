import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./productlist.css"



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
  return ((b.points)- (a.points));
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
 


//fetch points database
const [record2, setPoints] = useState([]);
    
    useEffect(() => {
     async function getPoints() {
       const response = await axios.get("points.json");
       const record2 = response.data
       setPoints(record2);
     }
   
     getPoints();
   
      return;
    }, [record2.length]);

//temp storage of logs sorted by timestamp
     const sortedHistory = record2.sort((a, b) => {
      return (new Date(a.timestamp)- new Date(b.timestamp));
    })
    
         //Math.floor easily turns strings into workable integers

    function remainingpoints() {
      return record2.reduce(function (sum, record) {
        return sum + Math.floor(record.points);
    }, 0);
    }

    //check if person has enough points.
    //if they do, do a greedy type operation through the database until target value (point cost of product) is zero.
    //as sortedHistory is a record of all history by oldest date, it will pull data from the oldest log and create a new log based on the that log [i] until the greedy indicator reaches zero
    async function processPayment(e) {
      e.preventDefault();
      if (remainingpoints() < e.target.value) {
        window.alert("Sorry, You do not have enough points!");
      }
      else {
        let currentpoints = e.target.value
        while (currentpoints > 0 ) {  
              //as sortedHistory is a record of all history by oldest date, it will pull data from the oldest log and create a new log based on the that log [i] until the greedy indicator reaches zero.
            for (let i=0; i<record2.length; i++) {
              //this allows only the points currently available in the current database[i] to be deducted so it does not go below zero
              const temppoints = (currentpoints - sortedHistory[i].points)
               axios.post("points.json", {
                 payer: `${sortedHistory[i].payer}`,
                 points: `-${sortedHistory[i].points}`,
                 timestamp: new Date ().toISOString()
               }, )
               //swap current points with the temppoint remaining after deduction, continue until zero.
               //because we have currentpoints > 0 condition, we always know the user will have enough value 
               currentpoints = temppoints
            }
        }
      }
      };

      //when the function escapes the new points will update to the new total after the transaction


      
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
                            <button onClick={processPayment} value={props.record.points}>Quick Buy</button>
                    </div>
    );
    


 // This following section will display the table with the records of products.
 return (
   <div className= "background" style={{ maxHeight: '100vh', overflowY:'auto'}}>
     <h3>Your Total Remaining Points! {remainingpoints()}</h3>
       <div>{products()}</div>
   </div>
 );
}
