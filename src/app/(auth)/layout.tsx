import styles from './auth-layout.module.css';

export default function AuthLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<main className={styles.authLayout}>
			<section className={styles.auth}>{children}</section>
		</main>
	);
}
