import React from 'react'
import "./Trip.css";

const TripData = (props) => {
  return (
    // <div className='t-card'>
    //       <div className='t-image'>
    //           <div>
    //               <img src={props.image} alt="" />
    //           </div>
    //           <h4>{props.heading}</h4>
    //           <p>{ props.text}</p>
    //       </div>
    // </div>
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="Trip" />
      </div>
      <div className="t-content">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default TripData
