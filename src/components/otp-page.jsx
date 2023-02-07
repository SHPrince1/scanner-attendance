import React from "react";
import style from "../css/otp.module.css";
import Otp from "../components/otp";

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
            <Otp />
          </div>
          <div className={style.resend}>
            <button className={style.resendBtn} type="submit">
              Resend
            </button>
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
