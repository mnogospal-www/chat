import { TextInput } from '@shared/components/TextInput/TextInput';
import { Button } from '@shared/components/Button/Button';
import { Link } from '@shared/components/Link/Link';
import { AuthForm } from '@auth/auth-form.types';
import Form from 'next/form';
import styles from './auth-form-ui.module.css';

interface Props {
	config: AuthForm;
	action: (formData: FormData) => void;
}

export function AuthFormUI({ config, action }: Props) {
	const { title, subtitle, inputs, links } = config;

	return (
		<Form className={styles.authForm} action={action}>
			<div className={styles.titles}>
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</div>
			<div className={styles.inner}>
				{inputs.map(({ name, type, placeholder }) => (
					<TextInput
						name={name}
						type={type}
						placeholder={placeholder}
						key={name}
					/>
				))}

				<Button>Подтвердить</Button>
			</div>

			<div className={styles.links}>
				{links.map(({ href, content }) => (
					<Link href={href} key={href}>
						{content}
					</Link>
				))}
			</div>
		</Form>
	);
}
