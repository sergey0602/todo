import React from 'react';
import styles from './style.less';

const Note = props => {
  if (props.selectedState) {
    return <li className={`${styles.note} ${styles.selected}`}>{props.value}</li>
  } else {
    return <li className={styles.note}>{props.value}</li>
  }
};

export default Note;
