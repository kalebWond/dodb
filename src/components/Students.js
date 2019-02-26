import React from 'react';
import DumBar from './DumBar';
import AddUser from './AddUser';
import SubTable from './SubTable';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import '../css/main.css';

class Students extends React.Component {

	constructor() {
	  super();
	  this.state = {
	    students: []
	  }
	}

	logout() {
	  this.props.history.go('/');
	}

	componentWillMount() {
		fetch('http://localhost:8181/getStudents')
					.then(data => data.json())
					.then(data => this.setState({students: data}))
					.catch(err => console.log(err))
	}

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
				<DumBar history={this.props.history} logout={this.logout} visible={this.state.visible} />
				<AddUser closeModal={this.closeModal} visibility={this.state.visible} />
				<ReactTable className="custom" data={this.state.students} 
					columns={columns} SubComponent={row => {
						console.log(row.original.Id);
				    return (
				      <SubTable studId={row.original.Id} />
    );
  }} />
			</div>
			)
	}
}

export default Students;