import React from 'react';
import DumBar from './DumBar';

class GradeReport extends React.Component {

	render() {
		return(
			<div>
				<DumBar history={this.props.history} />
			</div>
			)
	}

}

export default GradeReport;