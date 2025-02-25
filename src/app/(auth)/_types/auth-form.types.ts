export interface AuthForm {
	title: string;
	subtitle: string;
	inputs: {
		name: string;
		placeholder: string;
		type: string;
	}[];
	links: {
		href: string;
		content: string;
	}[];
}

export interface AuthFormConfig {
	[key: string]: AuthForm;
}

export interface AuthFormActions {
	[key: string]: (formData: FormData) => void;
}
