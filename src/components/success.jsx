import React from "react";
import style from "../css/success.module.css";
import { TiTick } from "react-icons/ti";

const Success = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.subParentBox}>
          <div className={style.tickbox}>
            <TiTick size={200} />
          </div>
          <h2>Email Verification Successful</h2>
        </div>
          <div className={style.nextbtnBox}>
          <a href="#">Launch App </a>
        </div>
      </div>
    </>
  );
};

export default Success;
