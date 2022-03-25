import React, { Fragment } from 'react'
import styles from './Header.module.css';
import {FaArrowsAlt,FaTrashAlt,FaArrowLeft,FaArrowRight,FaPlusCircle,FaEdit} from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
const Header = () => {

    let history=useHistory();
  

  return (
      <Fragment>
      <div className={styles.main}>
          <div className={styles.header} >Mathematics</div>
          <div className={styles.subWrap}>
              <div style={{marginRight : '10rem'}}>
                  <b>Actions</b>
                  <div className={styles.subTitle}>
                      Move,Ident,<br/>Outdent,Delete
                  </div>
              </div>
              <div>
                  <b>Standard</b>
                  <div className={styles.subTitle}>
                      The text of the standard
                  </div>
              </div>
          </div>
          <div className={styles.subWrap}>
          <div className={styles.icons} style={{marginRight:'10rem'}}>
              <span><FaArrowsAlt/></span>
              <span><FaArrowLeft/></span>
              <span><FaArrowRight/></span>
              <span><FaTrashAlt/></span>
              <span><FaEdit/></span>
          </div>
          <div className={styles.blockdiv}></div>
          <div className={styles.validinput}>
              <b>Type standard here(e.g.Numbers)</b>
          </div>
          </div>
          <div>
              <button type='submit' className={styles.button} onClick={()=> {history.push('/addSchedule')}} ><FaPlusCircle className={styles['icon-add']} />Add a Standard</button>
          </div>
          </div>
        
      </Fragment>
  )
}

export default Header