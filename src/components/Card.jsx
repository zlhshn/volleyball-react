import React, { useState } from "react";

const Card = ({ name, img, statistics }) => {
  const [displayStats, setDisplayStats] = useState(false);

  return (
    <div className="card col-3 ">
      <div  onClick={() => setDisplayStats(!displayStats)}>
        {displayStats ? (
          <>
          <div className="name">
          <a href={`https://en.wikipedia.org/wiki/${name}`}>{name}</a>
        </div>
          <ul className="mt-5">
            {statistics.map((stats, index) => (
              <li key={index}>🏐{stats}</li>
            ))}
          </ul></>
        ) : (
          <>
          <div>
            <img src={img}  />
          </div>
          <div className="name">
        <a href={`https://en.wikipedia.org/wiki/${name}`}>{name}</a>
      </div>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Card;
