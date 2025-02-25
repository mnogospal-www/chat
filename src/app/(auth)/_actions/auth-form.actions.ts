import { AuthFormActions } from '@auth/auth-form.types';

export const AUTH_ACTIONS: AuthFormActions = {
	'/signup': (formData: FormData) => {
		const formProps = Object.fromEntries(formData);
		console.log('signup', formProps);
	},

	'/signin': (formData: FormData) => {
		const formProps = Object.fromEntries(formData);
		console.log('signin', formProps);
	},

	'/recovery': (formData: FormData) => {
		const formProps = Object.fromEntries(formData);
		console.log('recovery', formProps);
	}
};
