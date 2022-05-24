import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
 const [form, setForm] = useState({
    postnumber: "",
    photo: "",
    title: "",
    date: "",
    content: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`/blogpost/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/admin");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPost = {
     postnumber: form.postnumber,
     photo: form.photo,
     title: form.title,
     date: form.date,
     content: form.content,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`/blogpost/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPost),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/admin");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
    <div>
      <h3>Create New Devnotes --&gt; Blogpost</h3>
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
           value="Update Post"
           className="submitButton"
         />
       </div>
      </form>
    </div>
  );
 }