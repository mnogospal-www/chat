import { MessageForm } from '@chat/MessageForm/MessageForm';
import { Icon } from '@shared/components/Icon/Icon';
import { ArrowLeft as ToSidebar } from 'lucide-react';
import clsx from 'clsx';
import styles from './chat-room.module.css';

interface Props {
	className: string;
	toggleSidebar: () => void;
	isDesktop: boolean;
}

export function ChatRoom({ className, toggleSidebar, isDesktop }: Props) {
	return (
		<section className={clsx(styles.chatRoom, className)}>
			<header>
				{!isDesktop && (
					<Icon onClick={toggleSidebar}>
						<ToSidebar />
					</Icon>
				)}
			</header>
			<div className={styles.history}></div>
			<div className={styles.messageFormWrapper}>
				<MessageForm />
			</div>
		</section>
	);
}
