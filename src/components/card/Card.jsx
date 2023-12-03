import React, { useState } from "react";



const Card = ({name,img,statistics}) => {

  const [displayStats ,setDisplayStats] =useState(true);
  return (

   
     
    <div className="card col-3 player" onClick={()=> setDisplayStats(!displayStats)}>
      {displayStats?(<img className="card-img-top" src={img} alt={name} /> ) :(
        <ul>


          {statistics.map((item)=>(

            <li key={name}>
           🏐 {item}

            </li>
          ))}
        </ul>
      )


      }

      <div>
        <div className="card-text">
          <a href="#">{name}</a>
        </div>
      </div>
  



    </div>
    
    
  )
}

export default Card