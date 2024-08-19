import React from "react";
import Rigtcontent from "./Rigtcontent";
import Leftcontent from "./Leftcontent";

const Maincontent = () => {
  return (
    <>
      <div className="left_content">
        <div className="head_content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <h1>Select Payment methods</h1>
        </div>
        <div className="main_payment_box">
        <div className="main_content">
        
          <Leftcontent/>
        </div>
        <Rigtcontent/>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
