import Image from 'next/image';
import styles from './dialog-card.module.css';

interface Props {
	onClick?: () => void;
}

export function DialogCard({ onClick }: Props) {
	return (
		<button className={styles.dialogCard} onClick={onClick}>
			<Image src='/avatar.png' alt='react monster' width={50} height={50} />
			<div>
				<h3>react monster</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
					assumenda qui cum commodi nobis blanditiis corrupti molestiae veniam
					illo quibusdam maiores distinctio. Temporibus, inventore. Inventore
					velit quod sit in odit.
				</p>
			</div>
		</button>
	);
}
