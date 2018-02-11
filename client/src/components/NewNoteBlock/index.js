import React from 'react';
import styles from './style.less';

const NewNoteBlock = props => (
  <div className={styles['new-note-block']}>
    <input
      type='text'
      onChange={props.inputHandler}
      placeholder='Please enter a value'
      value={props.inputValue}
    />
    <button type='button' onClick={props.buttonHandler}>create a note</button>
  </div>
);

export default NewNoteBlock;
