import React from "react";
import style from "../css/otp.module.css";

const OtpPage = () => {
  return (
    <>
      {/* <h1>OTP PAGE</h1> */}
      <div className={style.ParentBox}>
        <div className={style.subParentBox}>
          <h4>OTP</h4>
          <div className={style.otpText}>
            <p>Enter the CODE that was sent to your chrissito55@gmail.com</p>
          </div>
          <div className={style.dashbox}>
            <div className={style.dash}></div>
            <div className={style.dash}></div>
            <div className={style.dash}></div>
            <div className={style.dash}></div>
          </div>
          <div className={style.resend}>
            <a href="#">Resend</a>
          </div>
        </div>
        <div className={style.nextbtnBox}>
          <a href="#">Next </a>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
