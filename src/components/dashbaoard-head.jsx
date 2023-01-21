import React from 'react'
import style from '../css/dashhead.module.css'

import {RxAvatar} from "react-icons/rx"

const DashbaoardHead = (props) => {
  return (
    <>
        <div className={style.parentBox}>
            <div className={style.subParentBox}>
                <div className={style.avata}>
                    <RxAvatar size={250} />
                </div>
                <div className={style.name}>
                    <p>Hi,</p>
                    <h3 className={style.addName}>Taiwo Ogundare</h3>
                    <p>Admin</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default DashbaoardHead