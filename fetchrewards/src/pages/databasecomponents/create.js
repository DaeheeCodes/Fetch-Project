import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./create.css"

export default function Create() {
 const [form, setForm] = useState({
   postnumber: '',
   photo: '',
   title: '',
   date: '',
   content: '',
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPost = { form };
   console.log( form)
    axios.post("/blogpost/create", newPost) 
    .then((res) => {
      console.log(res.data);
  }).catch((error) => {
      console.log(error)
  });
 
   setForm({   
  postnumber: "",
   photo: "",
   title: "",
   date: "",
   content: "", });
   navigate("/admin");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="createcontainer">
     <h3>Create New Blogpost</h3>
     <form onSubmit={onSubmit}>
     <div className="formContainer">
         <label htmlFor="postnumber">Post Number</label>
         <input
           type="text"
           className="formSubmitter"
           id="postnumber"
           value={form.postnumber}
           onChange={(e) => updateForm({ postnumber: e.target.value })}
         />
       </div>
     <div className="formContainer">
         <label htmlFor="photo">Photo URL</label>
         <input
           type="text"
           className="formSubmitter"
           id="photo"
           value={form.photo}
           onChange={(e) => updateForm({ photo: e.target.value })}
         />
       </div>
       <div className="formContainer">
         <label htmlFor="title">Title</label>
         <input
           type="text"
           className="formSubmitter"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div className="formContainer">
         <label htmlFor="date">Date</label>
         <input
           type="date"
           className="formSubmitter"
           id="date"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
       <div className="formContainer">
       </div>
       <div className="formContainer">
         <label htmlFor="content">Content</label>
         <input
           type="text"
           className="formSubmitter"
           id="content"
           value={form.content}
           onChange={(e) => updateForm({ content: e.target.value })}
         />
       </div>
       <div className="formSubmit">
         <input
           type="submit"
           value="Create Post"
           className="submitButton"
         />
       </div>
     </form>
   </div>
 );
}

