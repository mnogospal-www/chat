import { DialogCard } from '@chat/DialogCard/DialogCard';
import { Search } from '@chat/Search/Search';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './sidebar.module.css';

interface Props {
	className: string;
	toggleSidebar: () => void;
}

export function Sidebar({ className, toggleSidebar }: Props) {
	const [isSearchActive, setIsSearchActive] = useState(false);

	const openSearch = () => setIsSearchActive(true);
	const closeSearch = () => setIsSearchActive(false);

	return (
		<section className={clsx(styles.sidebar, className)}>
			<Search
				openSearch={openSearch}
				closeSearch={closeSearch}
				isActive={isSearchActive}
			/>
			<div className={clsx(styles.dialogList, isSearchActive && styles.hidden)}>
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
				<DialogCard onClick={toggleSidebar} />
			</div>
		</section>
	);
}
