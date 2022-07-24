import React from "react";
import "../style/Error.css";
const Error = () => {
  return (
    <>
      <div className="align " style={{height:'76.7vh', alignItems:'center'}}>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__col">
              <div className="box animation animation--shake--vertical">4</div>
            </div>

            <div className="grid__col">
              <div className="box animation animation--reverse animation--shake--vertical">
                0
              </div>
            </div>

            <div className="grid__col">
              <div className="box animation animation--shake--vertical">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
