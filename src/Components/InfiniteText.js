import React from "react";
import classes from "../Styles/Infinite.module.css";

const InfintiteText = () => {
  return (
    <React.Fragment>
      <div className={classes.marquee}>
        <div className={classes.marqueeContentContainer}>
         <p>Coming Soon</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfintiteText;
