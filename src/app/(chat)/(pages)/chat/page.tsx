'use client';

import { ChatRoom } from '@chat/ChatRoom/ChatRoom';
import { Sidebar } from '@chat/Sidebar/Sidebar';
import { useDisplaySize } from '@shared/hooks/useDisplaySize';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './chat-page.module.css';

export default function Chat() {
	const [isSidebarActive, setIsSidebarActive] = useState(true);
	const { isDesktop } = useDisplaySize();

	const toggleSidebar = () => {
		setIsSidebarActive((pervious) => !isDesktop && !pervious);
	};

	return (
		<main
			className={clsx(
				styles.chatLayout,
				isDesktop ? styles.desktop : styles.mobile
			)}
		>
			<Sidebar
				className={clsx(styles.sidebar, isSidebarActive && styles.active)}
				toggleSidebar={toggleSidebar}
			/>
			<ChatRoom
				className={styles.chatRoom}
				toggleSidebar={toggleSidebar}
				isDesktop={isDesktop}
			/>
		</main>
	);
}
