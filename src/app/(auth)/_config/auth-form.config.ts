import { AuthFormConfig } from '@auth/auth-form.types';

export const AUTH_FORM_CONFIG: AuthFormConfig = {
	'/signin': {
		title: 'Авторизация',
		subtitle: 'Войдите в свой аккаунт, чтобы продолжить',
		inputs: [
			{
				name: 'email',
				type: 'text',
				placeholder: 'Введите ваш адрес электронной почты'
			},
			{
				name: 'password',
				type: 'password',
				placeholder: 'Введите пароль'
			}
		],
		links: [
			{
				href: '/signup',
				content: 'Создать аккаунт'
			},
			{
				href: '/recovery',
				content: 'Забыли пароль?'
			}
		]
	},

	'/signup': {
		title: 'Регистрация',
		subtitle: 'Начните ваше общение прямо сейчас!',
		inputs: [
			{
				name: 'email',
				type: 'text',
				placeholder: 'Введите ваш адрес электронной почты'
			},
			{
				name: 'password',
				type: 'password',
				placeholder: 'Придумайте пароль'
			}
		],
		links: [
			{
				href: '/signin',
				content: 'Войти в аккаунт'
			},
			{
				href: '/recovery',
				content: 'Забыли пароль?'
			}
		]
	},

	'/recovery': {
		title: 'Восстановление',
		subtitle: 'Мы отправим вам инструкции на почту',
		inputs: [
			{
				name: 'email',
				type: 'text',
				placeholder: 'Введите ваш адрес электронной почты'
			}
		],
		links: [
			{
				href: '/signin',
				content: 'Войти в аккаунт'
			},
			{
				href: '/signup',
				content: 'Создать аккаунт'
			}
		]
	}
};
