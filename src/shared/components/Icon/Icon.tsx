import styles from './icon.module.css';

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
}

export function Icon({ children, onClick }: Props) {
	return (
		<button className={styles.icon} onClick={onClick}>
			{children}
		</button>
	);
}
