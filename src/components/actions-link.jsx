import React from "react";
import style from "../css/actionlink.module.css"

const Actionslink = (props) => {
  return (
    <>
   
      <div className={style.parentBox}>
        <div className={style.subParentBox}>
          <div className={style.iconBox}>
            <div>{props.icon}</div>
          </div>
          <div className={style.textBox}>
            <a href="#">{props.title}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actionslink;
