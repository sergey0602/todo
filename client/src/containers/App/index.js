import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewNoteBlock from '../../components/NewNoteBlock';
import NotesList from '../../components/NotesList';
import styles from './style.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newNoteValue: '',
      selectedNotes: []
    }
    this.newNoteInputHandler = this.newNoteInputHandler.bind(this);
    this.newNoteButtonHandler = this.newNoteButtonHandler.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  newNoteInputHandler(event) {
    this.setState({ newNoteValue: event.target.value });
  }

  newNoteButtonHandler() {
    console.log(this.state.newNoteValue);
    console.log(Math.round(Math.random()*10000000));
  }

  selectNote(id) {
    if (selectedNotes.includes(id)) {
      const newSelectedNotes = this.state.selectedNotes.filter(note => note !== id);
      this.setState({ selectedNotes: newSelectedNotes });
    } else {
      this.setState({ selectedNotes: [...this.state.selectedNotes, id] });
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <NewNoteBlock
          inputHandler={this.newNoteInputHandler}
          buttonHandler={this.newNoteButtonHandler}
          inputValue={this.state.newNoteValue}
        />
        <NotesList notes={[{text: 'gdfgd', id: 'tytyt'}]} selectedNotes={this.state.selectedNotes} />
        {
          this.state.selectedNotes.length ? <button type='button'>Delete selected notes</button> : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
