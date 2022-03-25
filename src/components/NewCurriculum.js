import React, {useState} from 'react'
import Curriculum from './Curriculum';
import styles from './NewCurriculum.module.css'
import {FaPlusCircle} from 'react-icons/fa'

const NewCurriculum = () => {

    const [schedule, setSchedule] = useState("");
    const [scheduleArray, setScheduleArray] = useState([]);
    const [btn, setbtn] = useState(false);
    const [vid, setvid] = useState(null);
    // const [marginStyle, setMarginStyle] = useState({})

    const setValue = (event) => {
      setSchedule(event.target.value);
    };
  
    const addValue = () => {
        
      if (schedule !== "") {
        setScheduleArray((old) => {
          return [...old, schedule];
        });
        setSchedule("");
      } else {
        alert("please enter the value");
      }
    };
  
    const deletee = (id) => {
      setScheduleArray((olditem) => {
        return olditem.filter((arrayelemet, index) => {
          return index !== id;
        });
      });
    };
  
    const editSchedule = (id) => {
      setbtn(true);
      setSchedule(scheduleArray[id]);
  
      setvid(id);
    };

    const editkrdo = () => {
      const newt = [...scheduleArray];
      newt[vid] = schedule;
      setScheduleArray(newt);
      setvid(null);
      setbtn(false);
      setSchedule('');
    };

    const drag = (id) => {
      const newt = [...scheduleArray];
      let temp = newt[id];
      if (newt.length > 1 && id - 1 >= 0) {
        newt[id] = newt[id - 1];
        newt[id - 1] = temp;
      }
      setScheduleArray(newt);
    };


    // const moveLeft=(id)=>{
    //    scheduleArray[id].setMarginStyle({marginLeft: "-0.3rem"})
    // }

    // const moveRight=(id)=>{
    //     scheduleArray[id].setMarginStyle({marginLeft: "0.3rem"})
    // }

  return (
    <div className={styles.main}>
        <div className={styles.submain}> <input type="text" className={styles['search-input']} placeholder="Type standard here(e.g.Numbers)" onChange={setValue} value={schedule}/> 
        {btn ? ( <button type='submit' onClick={editkrdo} className={styles.button} ><FaPlusCircle className={styles['icon-add']}/>Edit a Standard</button> )
                   : ( <button type='submit' onClick={addValue} className={styles.button} ><FaPlusCircle className={styles['icon-add']}/>Add a standard</button>  )}
            
 
    </div>
          <div className={styles.container}>
          <ul>        
              {scheduleArray.map((value, index) => {
                return (
                      <Curriculum key={index} schedule={value} id={index} deletee={deletee} editSchedule={editSchedule} drag={drag}/>
                        );
                      })}
              
          </ul>
    </div>
    </div>
  )
}

export default NewCurriculum