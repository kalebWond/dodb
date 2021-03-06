import React from 'react';
import '../css/main.css';

class AddUser extends React.Component {

	constructor() {
		super();
		this.state = {
			userName: '',
			password: '',
			password_confirm: ''
		}
	}

	onChangeHandler = (event) => {
		
		let id = event.target.id;
		switch(id) {
			case "userName":
				this.setState({userName: this.userName.value});
				break;
			case "password_confirm":
				this.setState({password_confirm: this.passConfirm.value});
				break;
			case "password":
				this.setState({password: this.password.value});
				break;
		}
		// if(this.state.userName.length > 2 && this.state.password.length !== 0 && this.state.password === this.state.password_confirm) {
		// 	console.log("hello condition met");
		// 	this.button.removeAttribute('disabled');
		// }
		// else {
		// 	this.button.setAttribute("disabled", "disabled");
		// }
	}

	render() {

		return(
			<div className={'modal ' + this.props.visibility} >
			  <div className="modal-background"></div>
			  <div className="modal-card">
			    <header className="modal-card-head">
			      <p className="modal-card-title">Add User</p>
			      <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
			    </header>
			    <section className="modal-card-body">

			    	<div className="field">
			    	    <div className="control">
			    	        <input id="userName" className="input is-block" ref={(input) => {this.userName = input}}
			    	        		onChange={this.onChangeHandler} type="text" 
			    	        		value={this.state.userName} placeholder="User Name" autoFocus />
			    	    </div>
			    	</div> 

			    	<div className="field">
			    	    <div className="control">
			    	        <input id="password" className="input is-block" ref={(input) => {this.password = input}}
			    	        		onChange={this.onChangeHandler} type="password" 
			    	        		value={this.state.password} placeholder="Password" />
			    	    </div>
			    	</div>

			    	<div className="field">
			    	    <div className="control">
			    	        <input id="password_confirm" className="input is-block" ref={(input) => {this.passConfirm = input}}
			    	        		onChange={this.onChangeHandler} type="password" 
			    	        		value={this.state.password_confirm} placeholder="Confirm Password" />
			    	    </div>
			    	</div>

			    </section>
			    <footer className="modal-card-foot">
			      <a className="button is-primary" 
			      		ref={(button) => this.button = button} >Save Changes</a>
			      <a className="button" onClick={this.props.closeModal}>Cancel</a>
			    </footer>
			  </div>
			</div>
		)
	
	}
}

export default AddUser;