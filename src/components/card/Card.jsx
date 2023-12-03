import React, { useState } from "react";



const Card = ({name,img,statistics}) => {

  const [displayStats ,setDisplayStats] =useState(true);
  return (

    <main className="container row">
    <div className="card col-4" onClick={()=> setDisplayStats(!displayStats)}>
      {displayStats?(<img className="card-img-top" src={img} alt={name} /> ) :(
        <ul>


          {statistics.map((item)=>(

            <li>
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
    </main>
  )
}

export default Card