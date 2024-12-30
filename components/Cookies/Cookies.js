"use client";
import classes from "./Cookies.module.css";
import Close from "../../public/icons/x close no.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function Cookies() {
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    const hasCookies = document.cookie.includes("Cookies=true");
    setIsvisible(!hasCookies);
  }, []);

  const handelConfirm = () => {
    document.cookie = "Cookies=true";
    setIsvisible(false);
  };

  const handleCancle = () => {
    setIsvisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className={classes.content}>
      <div className={classes.frame_1}>
        <p className={classes.text}>
          By using our site, you agree to eat our cookies.
        </p>
        <button onClick={handleCancle}>
          <Image
            src={Close}
            alt="Close"
            width={32}
            height={32}
            className={classes.image}
          />
        </button>
      </div>
      <div className={classes.frame_2}>
        <button className={classes.button} onClick={handelConfirm}>
          Accept cookies
        </button>
        <button className={classes.text_button}>Go to settings</button>
      </div>
    </div>
  );
}

export default Cookies;
