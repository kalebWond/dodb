import React from 'react';
import DumBar from './DumBar';
class Course extends React.Component {

	constructor() {
		super();
		
	}
	
	logout() {
	  this.props.history.go('/');
	}

	render() {
		return(
			<DumBar history={this.props.history} logout={this.logout} />

		)
		
	}

}	
	


export default Course;