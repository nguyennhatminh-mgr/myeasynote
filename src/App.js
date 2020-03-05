import React, { Component } from 'react';

import './App.css';
// import * as firebase from 'firebase';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import {connect} from 'react-redux';
import AlertInfo from './components/AlertInfo';
import Footer from './components/Footer';

class App extends Component {
  // pushData = () => {
  //   var datatopush = firebase.database().ref('/');
  //   datatopush.push({
  //     id: 5,
  //     title: "title for note 5",
  //     contentNote:"content for note 5"
  //   })
  // }
  // addData = (item) => {
  //   firebaseConnect.push(item);
  // }
  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm></NoteForm>
    }
  }
  render(){
    return (
      <div>
          <Nav></Nav>
          <AlertInfo></AlertInfo>
          <div className="container">
              <div className="row setdisplay">
                  <NoteList></NoteList>
                  {
                    this.showForm()
                  }
              </div>
          </div>
          <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App)
