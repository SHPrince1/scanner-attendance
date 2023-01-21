import React from "react";
import style from "../css/email.module.css";

const EmailPage = () => {
  return (
    <>
      <div className={style.content}>
        <input type="email" placeholder="Email Address" />
      </div>
      <div className={style.nextbtnBox}>
        <a href="#">Next </a>
      </div>
    </>
  );
};

export default EmailPage;
