import React from 'react'
import style from "../css/dashboard.module.css"
import Actionslink from './actions-link'
import DashbaoardHead from './dashbaoard-head'
import {MdOutlineSchool, MdHistoryEdu} from "react-icons/md"
import {GiTeacher} from "react-icons/gi"
import {BsBook} from "react-icons/bs"

const Dashboard = () => {
  return (
    <>
        
        <DashbaoardHead/>
        <h1>QUICK ACTIONS</h1>
        <div className={style.linksBox}>

        <Actionslink title="Create Student"
        icon={<MdOutlineSchool size={50} /> }
        
        />
        <Actionslink
        title="Add Lecturer"
        icon={<GiTeacher  size={50}/>}
        />
        <Actionslink 
         title="Add Course"
         icon={<BsBook  size={50}/>}
        />
        <Actionslink 
         title="Attendance History"
         icon={<MdHistoryEdu  size={50}/>}/>
        </div>
    </>


  )
}

export default Dashboard