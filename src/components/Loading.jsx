import React from 'react';
import "../style/Loading.css"

function Loading(props) {
    return (
        <div className="parent">
        <div className="child">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span> 
          <span className="circle"></span> 
          <span className="circle"></span>
        </div>
      </div>
    );
}

export default Loading;