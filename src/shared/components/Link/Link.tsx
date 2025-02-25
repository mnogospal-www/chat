import Anchor from 'next/link';
import styles from './link.module.css';

interface Props {
	href: string;
	children: string;
}

export function Link({ href, children }: Props) {
	return (
		<Anchor href={href} className={styles.link}>
			{children}
		</Anchor>
	);
}
