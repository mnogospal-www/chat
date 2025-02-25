import styles from './text-input.module.css';

interface Props {
	type: string;
	name: string;
	placeholder: string;
}

export function TextInput({ type, name, placeholder }: Props) {
	return (
		<input
			type={type}
			name={name}
			className={styles.textInput}
			placeholder={placeholder}
		/>
	);
}
