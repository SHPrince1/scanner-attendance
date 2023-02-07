import React from "react";
import Select from "react-select";
import style from "../css/create-student.module.css";

const options = [
  { value: "computer science", label: "Computer Science" },
  // { value: "strawberry", label: "Strawberry" },
  // { value: "vanilla", label: "Vanilla" },
];
const leveloptions = [
  { value: "hnd1", label: "Hnd1" },
  { value: "hnd2", label: "Hnd2" },
  { value: "ond1", label: "Ond1" },
  { value: "ond2", label: "Ond2" },
  
];
const levels = [
  { value: "ft", label: "FT" },
  { value: "pt", label: "PT" },
  //   { value: "vanilla", label: "Vanilla" },
];

const CreateStudent = () => {
  return (
    <>
      <div className={style.parentBox}> 
        <div className={style.header}>
          <h1>Create Student</h1>
        </div>
        <div className={style.inputBox}>
          <input placeholder="Matric Number" />
          <input placeholder="Full Name" />
        </div>
        <div className={style.selectBox}>
          <Select
            placeholder={<div className={style.selectPlace}>Department </div>}
            options={options}
          />
        </div>

        <div className={style.selectLevel}>
          <Select
            placeholder={<div className={style.selectPlace}>PT/FT</div>}
            options={levels}
          />
          <Select
            placeholder={<div className={style.selectPlace}>Level </div>}
            options={leveloptions}
          />
        </div>

        <a href="#" className={style.btn}>
            <p className={style.btnBox}>Done</p>
        </a>
      </div>
    </>
  );
};

export default CreateStudent;
