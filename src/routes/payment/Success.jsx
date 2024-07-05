import React from 'react'

const Success = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center"> 
    <h1 style={{ color: 'green', fontSize: '36px', textAlign: 'center', marginTop:"180px" }}>Payment Successful!</h1>
    {/* <div style={{ color: 'green', fontSize: '68px',textAlign: 'center' }}>
      &#10003; 
    </div> */}
    <div style={{ textAlign: 'center' }}>
    <div style={{ color: 'green', fontSize: '70px', borderRadius: '50%', width: '100px', height: '100px', border: '2px solid green', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: "40px" }}>
      &#10003; 
    </div>
  </div>
  </div>
  

)
}

export default Success
