import React, { Component } from 'react';

const Index = () => {
  return (
    <div>

      <div className="container">
        <img src="../images/beijing.JPG" alt="Beijing" width="300" height="300" />
        <div className="topcover">Save $90 pay only</div>
        <div className="topright">$729</div>
      </div>

      <div className="container">
        <img src="../images/new_york.JPG" alt="NewYork" width="300" height="300" />
        <div className="topcover">Save $60 pay only</div>
        <div className="topright">$429</div>
      </div>

      <div className="container">
        <img src="../images/tokyo.JPG" alt="Tokyo" width="300" height="300" />
        <div className="topcover">Save $30 pay only</div>
        <div className="topright">$529</div>
      </div>
    </div>
  )
}
export default Index;