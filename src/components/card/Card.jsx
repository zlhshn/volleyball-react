import React, { useState } from "react";
import "./card.css"



const Card = ({name,img,statistics}) => {

  const [displayStats ,setDisplayStats] =useState(true);
  return (

   
     
    <div className="card col-3 m-1 d-flex align-items-center  " onClick={()=> setDisplayStats(!displayStats)}>
      {displayStats?(<img className="card-img-top m-2" src={img} alt={name} /> ) :(
        <ul className="p-5 m-5 ">


          {statistics.map((item)=>(

            <li key={name} className="list-unstyled d-flex align-items-center ">
           🏐 {item}

            </li>
          ))}
        </ul>
      )


      }

      <div>
        <div className="card-text ">
          <a href="#">{name}</a>
        </div>
      </div>
  



    </div>
    
    
  )
}

export default Card