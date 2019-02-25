import React from 'react';
import '../css/main.css';

class Menu extends React.Component {

	render() {
		console.log(this);
		return(
			<div className="menu">
				<div style={{marginTop: "200px"}} className="field is-grouped">
				  <p className="control">
				    <a className="button is-large is-success" 
				    		onClick={() => {this.props.history.push('/students')}}>
				      Students
				    </a>
				  </p>
				  <p className="control">
				    <a className="button is-large is-info"
				    		onClick={() => {this.props.history.push('/courses')}} >
				      Courses
				    </a>
				  </p>
				  <p className="control">
				    <a className="button is-large is-success"
				    		onClick={() => {this.props.history.push('/grades')}} >
				      Grade Reports
				    </a>
				  </p>
				</div>
			</div>
			)
	}
}

export default Menu;