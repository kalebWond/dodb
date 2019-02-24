import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import './css/bulma.css';

class App extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.addUser = this.addUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      visible: ''
    }
  }

  logout() {
    this.props.history.goBack('/');
  }
  
  addUser() {
    this.setState({visible: 'is-active'})
  }

  closeModal() {
    this.setState({visible: ''})
  }

  render() {
    return (
      <div>
       <NavBar logout={this.logout} visible={this.state.visible} addUser={this.addUser} />
       <AddUser closeModal={this.closeModal} visibility={this.state.visible} />
      </div>

    );
  }
}

export default App;
