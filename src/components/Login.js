import React from 'react';
import axios from 'axios';
import '../css/login.css';
import login_logo from '../img/login.png';

class Login extends React.Component {
	
	constructor() {
		super();
		this.state = {
			userName: '',
			password: ''
		}
	}

	login = (e) => {
		e.preventDefault();
		
		let data = {
			username: this.state.userName,
			password: this.state.password
		}
		console.log(data);

		const url = "http://localhost:8181/login";
		axios({
			method: 'post',
			url: url,
			data: data
		}).then(data => {
					console.log(data);
					if(data.data.length !== 0 ) {
						this.props.history.push('/home')
					}
					
					else {
						alert("Could not Login. Check Credentials.")
					}})
			.catch(err => console.log(err));
		
		// localStorage.setItem('userName', true)
	}

	onChangeHandler = (event) => {
		let id = event.target.id;
		if (id === "user") {
			this.setState({userName: this.userName.value});
		}

		else if (id === "pass") {
			this.setState({password: this.password.value});
		}
	}

	render() {
		return (
			<div>
			<section>
				<div className="hero is-colorful is-fullheight">
				    <div className="hero-body">
				        <div className="container has-text-centered">
				            <div className="column is-8 is-offset-2">
				                <div className="box pad-150">
				                    <div className="columns">
				                        <div className="column is-one-third vcenter">
				                            <figure className="image">
				                                <img src={login_logo} alt="login_logo" />
				                            </figure>
				                        </div> 
                    <div className="column">
                        <div className="form-wrapper">
                           <form method="POST" onSubmit={(e)=> this.login(e)}>
                               <span className="form-title">User Login</span>
                                <div className="field">
                                    <div className="control">
                                        <input id="user" className="input is-rounded" ref={(input) => this.userName = input }
                                        	value={this.state.userName} onChange={this.onChangeHandler}
                                        	type="text" placeholder="Your User Name" autoFocus />
                                    </div>
                                </div> 

                                <div className="field">
                                    <div className="control">
                                        <input id="pass" className="input is-rounded" ref={(input) => this.password = input}
                                        	value={this.state.password} onChange={this.onChangeHandler}
                                        	type="password" placeholder="Your Password" />
                                    </div>
                                </div>
                                <input type="submit" value="Login" className="button is-block is-fullwidth is-primary is-rounded" />
                            </form> 
                        </div> 
                    </div> 
				                    </div> 
				                </div>
				            </div>
				        </div> 
				    </div> 
				</div>
			</section>
			</div>
			)
	}
}

export default Login;