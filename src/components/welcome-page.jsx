import React from "react";
import style from "../css/welcome.module.css";

const WelcomePage = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.content}>
          <h1>Hi, Welcome</h1>
        </div>
        <div className={style.nextbtnBox}>
            <a href="#">Next </a>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
