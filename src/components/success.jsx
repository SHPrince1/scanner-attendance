import React from "react";
import style from "../css/success.module.css";

const Success = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.subParentBox}>
          <h2>Email Verification Successful</h2>
        </div>
      </div>
    </>
  );
};

export default Success;
