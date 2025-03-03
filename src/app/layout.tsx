import { primaryFont } from '@shared/fonts';
import './global.css';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<body data-theme='dark' className={primaryFont.className}>
				{children}
			</body>
		</html>
	);
}
