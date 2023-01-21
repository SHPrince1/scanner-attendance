import React from "react";
import Select from "react-select";
import style from "../css/addlecturer.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ptft = [
  { value: "hnd", label: "Hnd" },
  { value: "ond", label: "Ond" },
  { value: "vanilla", label: "Vanilla" },
];
const coursecode = [
  { value: "com112", label: "Com113" },
  { value: "eng112", label: "Eng112" },
  //   { value: "vanilla", label: "Vanilla" },
];
const level = [
  { value: "level", label: "Level" },
  { value: "level2", label: "Level2" },
  //   { value: "vanilla", label: "Vanilla" },
];

const AddLecturer = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.genInputBox}>
          <div className={style.header}>
            <h1>Add Lecturer</h1>
          </div>
          <div className={style.inputBox}>
            <input placeholder="Full Name" type="text" />
            <input placeholder="Phone Number" type="tel" />
            <input placeholder="Email" type="email" />
          </div>
          <div className={style.selectBox}></div>
        </div>

        <div className={style.courseInfoBox}>
          <div className={style.textHead}>
            <h2>Course Information</h2>
          </div>

          <div className={style.selectTitleBox}>
            <Select
              className={style.selectTitle}
              placeholder={<div className={style.selectPlace}>Department </div>}
              options={options}
            />
          </div>

          <div className={style.proCodeBox}>
            <Select
              placeholder={
                <div className={style.selectPlace}>Course Code </div>
              }
              options={coursecode}
            />
            <Select
              placeholder={<div className={style.selectPlace}>FT/PT </div>}
              options={ptft}
            />
          </div>

          <div className={style.levSave}>
            <Select className={style.selLevel}
              placeholder={<div className={style.selectPlace}>Level </div>}
              options={level}
            />

           
              <a href="#" className={style.btn}>
                <p className={style.btnBox}>Save</p>
              </a>
            
          </div>
        </div>
        <div>
            <a href="#">
                Done
            </a>
        </div>
      </div>
    </>
  );
};

export default AddLecturer;
