import React from 'react';
import DumBar from './DumBar';
import AddUser from './AddUser';
import SubTable from './SubTable';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import '../css/main.css';

class Payments extends React.Component {

	state = {
        payments: []
    }

    logout() {
        this.props.history.go('/');
    }

	componentWillMount() {
		fetch('http://localhost:8181/payments')
					.then(data => data.json())
					.then(data => {
                        const payments = this.formatDate(data);
                        this.setState({payments})
                    })
					.catch(err => console.log(err))
    }
    
    formatDate(payments){
        const nPayments = payments.map(payment => {
            payment['Payment Date'] = payment['Payment Date'].split('T')[0];

            return payment;
        })

        return nPayments;
    }

	render() {

		const columns = [
            {
				Header: 'Lecturer Name',
				accessor: 'Lecturer Name'
			},
			{
				Header: 'Amount',
				accessor: 'Amount'
			},
			{
				Header: 'Currency',
				accessor: 'Currency'
			},
			{
				Header: 'Payment Date',
				accessor: 'Payment Date'
			},
			{
				Header: 'Payment Reason',
				accessor: 'Payment Reason'
			},
		]

		return(
			<div>
				<DumBar history={this.props.history} logout={this.logout} visible={this.state.visible} />
				<AddUser closeModal={this.closeModal} visibility={this.state.visible} />
				<ReactTable className="custom" data={this.state.payments} 
					columns={columns} />
			</div>
			)
	}
}

export default Payments;