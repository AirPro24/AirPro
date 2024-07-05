import React from 'react'

const Failure = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center"> 
    <h1 style={{ color: 'red', fontSize: '36px', textAlign: 'center', marginTop:"170px" }}>Payment Failed!</h1>
    {/* <div style={{ color: 'green', fontSize: '68px',textAlign: 'center' }}>
      &#10003; 
    </div> */}
    <div style={{ textAlign: 'center' }}>
    <div style={{ color: 'red', fontSize: '70px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
    &#9888;
    </div>
  </div>
  </div>
  

)
}

export default Failure
