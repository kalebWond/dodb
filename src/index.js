import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Login from './components/Login';
import Students from './components/Students';
import Register from './components/Register';
import Payments from './components/Payments';
import GradeReport from './components/GradeReport';
import Course from './components/Course';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/home" component={App} />
				<Route exact path="/students" component={Students} />
				<Route exact path="/add" component={Register} />
				<Route exact path="/grades" component={GradeReport} />
				<Route exact path="/courses" component={Course} />
				<Route exact path="/payments" component={Payments} />
			</Switch>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
