import React from 'react';
import DumBar from './DumBar';

class GradeReport extends React.Component {

	render() {

		const columns = [
			{
				Header: 'Name',
				accessor: 'Name'
			},
			{
				Header: 'Sex',
				accessor: 'Sex'
			},
			{
				Header: 'Department',
				accessor: 'Departement'
			},
			{
				Header: 'Phone',
				accessor: 'Phone'
			},
			{
				Header: 'Enrolled Year',
				accessor: 'EnrolledYear'
			}
		]

		return(
			<div>
				<DumBar history={this.props.history} />
			</div>
			)
	}

}

export default GradeReport;