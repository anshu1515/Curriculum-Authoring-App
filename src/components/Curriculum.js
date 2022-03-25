import React,{Fragment, useState} from 'react'
import {FaArrowsAlt,FaTrashAlt,FaArrowLeft,FaArrowRight,FaEdit} from 'react-icons/fa'
import styles from './Curriculum.module.css';
import './dragStyle.css'

const Curriculum = (props) => {

  const [style,setStyle]=useState('schedule')
  const [style2,setStyle2]=useState('schedule')

  const changeStyleRight=()=>{
    setStyle('dragRight')
   
  }

  const changeStyleLeft=()=>{
    setStyle2('dragLeft')
  }

  return (
    <Fragment>
    <li className={styles['schedule-list']}>
      <div className={styles.icons}>
       <span> <FaArrowsAlt  onClick={() => { props.drag(props.id);  }}/></span>
       <span><FaArrowLeft  onClick={changeStyleLeft} /></span>
       <span> <FaArrowRight  onClick={changeStyleRight}/></span>
       <span> <FaTrashAlt onClick={() => { props.deletee(props.id); }}/></span>
       <span><FaEdit onClick={() => { props.editSchedule(props.id);  }} /></span>
       <p className={style2}>
        <b className={style}>{props.schedule}</b></p>
        </div>
     
      </li>
    </Fragment>
  )
}

export default Curriculum