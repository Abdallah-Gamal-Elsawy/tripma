"use client";

import { useState } from "react";
import classes from "./adults.module.css";

const Adults = ({adultCount , minorsCount ,setAdultCount ,setMinorsCount}) => {

  const [isOpen, setIsOpen] = useState(false);
  const incrementAdults = () => setAdultCount(adultCount + 1);
  const decrementAdults = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };
  const incrementMinors = () => setMinorsCount(minorsCount + 1);
  const decrementMinors = () => {
    if (minorsCount >= 1) {
      setMinorsCount(minorsCount - 1);
    }
  };

  const handelIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={handelIsOpen}>
        <div className={classes.input_field}>
          <h3>
            {adultCount} Adult - {minorsCount} Minors
          </h3>
        </div>
      </button>
      {isOpen && (
        <>
          <div className={classes.list}>
            <div className={classes.row}>
              <h2 className={classes.text}>Adults:</h2>
              <button onClick={decrementAdults} className={classes.icon}>
                <h1 className="text-primary_background">-</h1>
              </button>
              <h1 className={classes.text}>{adultCount}</h1>
              <button onClick={incrementAdults} className={classes.icon}>
                <h1 className="text-primary_background">+</h1>
              </button>
            </div>
            <div className={classes.row}>
              <h2 className={classes.text}>Minors</h2>
              <button onClick={decrementMinors} className={classes.icon}>
                <h1 className="text-primary_background">-</h1>
              </button>
              <h1 className={classes.text}>{minorsCount}</h1>
              <button onClick={incrementMinors} className={classes.icon}>
                <h1 className="text-primary_background">+</h1>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Adults;
