import React from 'react';
import '../css/login.css';
import axios from 'axios';
import login_logo from '../img/login.png';

class Register extends React.Component {

	constructor() {
		super();
		this.state = {
			name: '',
			dob: '',
			sex: '',
			phoneNo: '',
			addressId: '41',
			enrolledYr: '',
			deptId: ''
		}
	}

	register = (e) => {
		e.preventDefault();
		const Url = 'http://localhost:8181/registerStudent';
		axios({
			method: 'post',
			url: Url,
			data: this.state
		}).then(data => console.log(data))
			.then(() => {
				alert(this.name.value+" has been registered!")
				this.name.value='';
				this.phone.value='';
				this.dob.value="";
				this.enroll.value="";
				this.department.value="";
			})
			.catch(err => {
				console.log(err);
				alert("Could not Register;")});
		// console.log("submitted");
	}

	onChangeHandler = (e) => {
		let id = e.target.id;
		switch(id) {
			case "name":
				this.setState({name: this.name.value});
				break;
			case "phone":
				this.setState({phoneNo: this.phone.value});
				break;
			case "dob":
				this.setState({dob: this.dob.value});
				break;
			case "enroll":
				this.setState({enrolledYr: this.enroll.value});
				break;
			case "dept":
				this.setState({deptId: this.department.value});
				break;
			default:
				if(e.target.type === "radio"){
					this.setState({sex: e.target.value});
				}
		}
	}

	render() {

		return(
			<div>
			<section>
				<div className="hero is-colorful is-fullheight">
				    <div className="hero-body">
				        <div className="container has-text-centered">
				            <div className="column is-8 is-offset-2">
				                <div className="box pad-150">
                   <form onSubmit={(e)=> this.register(e)}>
	                 <div className="form-wrapper">
                   <span className="form-title">Register Student</span>
	                    <div className="columns">
		                    <div className="column">
                            <div className="field">
                                <div className="control">
                                		<label htmlFor="name">Full Name</label>
                                    <input id="name" className="input is-rounded" 
                                    ref={input=>this.name=input} onChange={this.onChangeHandler}
                                    type="text" placeholder="Student Name" autoFocus />
                                </div>
                            </div> 

                            <div className="field">
                                <div className="control">
                                	<label htmlFor="date">Date of Birth</label>	
                                  <input id="dob" className="input is-rounded" onChange={this.onChangeHandler}
                                  		type="date" name="dob" ref={input=>this.dob = input}
                                    	placeholder="Date of Birth" min="1980-01-01" max="2018-12-31"/>
                                </div>
                            </div>
                            <div className="control">
                              <label className="radio">
                                <input type="radio" name="Sex" value="Male" onChange={this.onChangeHandler} />
                                Male
                              </label>
                              <label className="radio">
                                <input type="radio" name="Sex" value="Female" onChange={this.onChangeHandler} />
                                Female
                              </label>
                            </div>
                        </div> 

                        <div className="column">
                        	<div className="field">
                        	    <div className="control">
                        	    	<label htmlFor="phone">Phone</label>
                        	        <input id="phone" className="input is-rounded" type="text" 
                        	        	placeholder="Phone Number" onChange={this.onChangeHandler}
                        	        	ref={input=> this.phone = input} autoFocus />
                        	    </div>
                        	</div>

	                        <div className="field">
	                            <div className="control">
	                            	<label htmlFor="date">Date of Enrollment</label>
	                            	<input id="enroll" className="input is-rounded" type="date"
	                            		min="2000-01-01" max="2011-12-31"
	                            		placeholder="Enrollment Year in E.C" onChange={this.onChangeHandler}
	                            		ref={input=>this.enroll = input} />
	                            </div>
	                        </div>

	                        <div className="field">
	                          <div className="control">
	                            <div className="select is-info">
	                              <select id="dept" onChange={this.onChangeHandler} ref={select => this.department=select}>
	                                <option value="1">Chemical</option>
	                                <option value="2">IT</option>
	                                <option value="3">Software</option>
	                                <option value="4">Mechanical</option>
	                                <option value="5">Civil</option>
	                                <option value="6">Biomedical</option>
	                              </select>
	                            </div>
	                          </div>
	                        </div>
                        </div>
		                    </div> 
		                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                          <input type="button" onClick={() => this.props.history.goBack('/')} value="Cancel" className="button is-block is-rounded" />
                          <input type="submit" value="Save Changes" className="button is-block is-primary is-rounded" />
		                    </div>
	                    </div> 
                    </form> 
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

export default Register;