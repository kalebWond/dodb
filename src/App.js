import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import Menu from './components/Menu';
import './css/bulma.css';
import './App.css';

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
      <div className="bod">
       <NavBar logout={this.logout} visible={this.state.visible} addUser={this.addUser} />
       <AddUser closeModal={this.closeModal} visibility={this.state.visible} />
       <Menu history={this.props.history} />
       <footer className="footer" style={{marginTop:"20%", background:"#dee"}} >
         <div className="content has-text-centered">
           <p>
             <strong>Student</strong> Management System <code>powered by</code> PostgreSQL. Front-side is made using <strong>React.js</strong> 
              and the API using <strong>Node.js</strong>
           </p>
         </div>
       </footer>
      </div>

    );
  }
}

export default App;
