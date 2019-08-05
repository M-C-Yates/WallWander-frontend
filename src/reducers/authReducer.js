export default (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				...action
			};
		case 'REGISTER':
			return {
				...state,
				...action
			};
		case 'SETNAME':
			return {
				...state,
				...action
			};
		default:
			return state;
	}
};
