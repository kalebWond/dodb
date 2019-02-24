import React from 'react';
import '../css/login.css';
import login_logo from '../img/login.png';

class Login extends React.Component {
	// state = {
	// 	userName: ''
	// 	password: ''
	// }
	login(e) {
		e.preventDefault();
		this.props.history.push('/home');
		// localStorage.setItem('userName', true)
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
				                               <form onSubmit={(e)=> this.login(e)}>
				                                   <span className="form-title">User Login</span>
				                                    <div className="field">
				                                        <div className="control">
				                                            <input className="input is-rounded" type="text" placeholder="Your User Name" autoFocus />
				                                        </div>
				                                    </div> 

				                                    <div className="field">
				                                        <div className="control">
				                                            <input className="input is-rounded" type="password" placeholder="Your Password" />
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

	// Login.contextTypes = {
	// 	router: React.PropTypes.object
	// }
}

export default Login;