import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

class SubTable extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentWillMount() {
		axios({
			url: 'http://localhost:8181/getGrade',
			method: 'get',
			params: {
				Id: this.props.studId
			}
		}).then(data => this.setState({data: data.data}))
			.catch(err => console.log(err))
	}

	render() {
		
		const columns = [
			{
				Header: 'Subject',
				accessor: 'Name'
			},
			{
				Header: 'Grade',
				accessor: 'Grade'
			}
		]

		if(this.state.data.length !== 0){
			return(
				<ReactTable pageSize={8} data={this.state.data} columns={columns} />
				)
		}

		else {
			return <div>Waiting For Data</div>
		}

	}
}

export default SubTable;