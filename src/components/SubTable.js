import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

class SubTable extends React.Component {
	
	componentWillMount() {

	}

	render() {
		
		const columns = [
			{
				Header: 'Subject',
				accessor: 'Subject'
			},
			{
				Header: 'Result',
				accessor: 'FinalGrade'
			}
		]

		return(
			<ReactTable data={{Subject:"API", FinalGrade:100}} columns={columns} />
			)
	}
}

export default SubTable;