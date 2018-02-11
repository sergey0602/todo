import React from 'react';
import Note from '../Note';
import styles from './style.less';

const NotesList = props => (
  <ul className={styles['notes-list']}>
    {
      props.notes.length ?
        props.notes.map(note =>
          <Note 
            value={note.text}
            selectedState={props.selectedNotes.includes(note.id) ? 'selected' : null}/>
        )
        : <li>No notes...</li>
    }
  </ul>
);

export default NotesList;
