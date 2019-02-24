import React from 'react';
import '../css/navbar.css';

class AddUser extends React.Component {

	constructor() {
		super();
		this.state = {
			status: "",
			userName: '',
			password: '',
			password_confirm: ''
		}
	}

	onChangeHandler = (event) => {
		event.persist();
		// this.setState({})
		let id = event.target.id;
		// switch(id) {
		// 	case "userName":
		// 		this.setState({userName:})
		// }
		console.log(event);
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
			    	        <input id="userName" className="input is-block" onChange={this.onChangeHandler} type="text" value={this.state.userName} placeholder="User Name" autoFocus />
			    	    </div>
			    	</div> 

			    	<div className="field">
			    	    <div className="control">
			    	        <input id="password" className="input is-block" onChange={this.onChangeHandler} type="password" value={this.state.password} placeholder="Password" />
			    	    </div>
			    	</div>

			    	<div className="field">
			    	    <div className="control">
			    	        <input id="password_confirm" className="input is-block" onChange={this.onChangeHandler} type="password" value={this.state.password_confirm} placeholder="Confirm Password" />
			    	    </div>
			    	</div>

			    </section>
			    <footer className="modal-card-foot">
			      <a className={"button " + this.state.status}>Save Changes</a>
			      <a className="button" onClick={this.props.closeModal}>Cancel</a>
			    </footer>
			  </div>
			</div>
		)
	
	}
}

export default AddUser;