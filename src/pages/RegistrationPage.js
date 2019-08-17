import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startRegistration } from '../actions/auth';
import { UserForm } from '../components/UserForm';

const Navbar = React.lazy(() => import('../components/Navbar'));

const RegistrationPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const register = (e) => {
		e.preventDefault();
		const user = { email, password };
		dispatch(startRegistration(user));
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<UserForm
					setEmail={setEmail}
					setPassword={setPassword}
					submit={register}
					button="Register"
				/>
			</div>
		</React.Fragment>
	);
};

export default RegistrationPage;
