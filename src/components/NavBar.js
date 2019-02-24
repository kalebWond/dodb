import React from 'react';
import logo from '../img/login.png';
import '../css/navbar.css';

const NavBar = (props) => {

	return(
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
		    <a className="navbar-item" href="#">
		      <img src={logo} width="50" height="38" />
			    <div><strong>Student Management</strong></div>
		    </a>

		    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>

		  <div id="navbarBasicExample" className="navbar-menu">
		   
		    <div className="navbar-end">
		      <div className="navbar-item">
		        <div className="buttons">
		          <a className="button is-primary" onClick={props.addUser}>
		            <strong>Add User</strong>
		          </a>
		          <a className="button is-light" onClick={props.logout}>
		            Log out
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
		)
}

export default NavBar;