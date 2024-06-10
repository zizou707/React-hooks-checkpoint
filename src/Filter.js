import React, { useState } from 'react'
import useFetch from './useFetch'

 function Filter() {
  
  const [title ,setTitle]=useState("");
  const [rating ,setRating]=useState(0);
  fetch('http://localhost:3000/movies/', {
    method: 'GET',
    headers: { "Content-Type": "application/json" } 
  }).then(
 function  handleClick(){
    
   if (title.trim() !==""){
   return  movies.filter(m=>m.title === title)
      }else if(rating > 0){return movies.Filter(m=>m.rating === rating)}
    })

  return (
    <div onSubmit={handleClick} className='search-movie'>
         <div>
           <h3>Title : </h3>
           <input type="text" onChange={e=>setTitle(e.target.value)} style={{width:"200px",height:"25px",fontSize:"1.2rem"}} placeholder="Enter a title"/>
        </div>
        <div>
          <h3>Rating : </h3>
          <input type="text" onChange={e=>setRating(e.target.value)} style={{width:"40px",fontSize:"1.2rem"}} placeholder="0"/>
        </div>
        <button style={{position:"absolute",right:"450px",top:"200px"}}>Search</button>
    </div>
  )
}
export default Filter