import { DialogCard } from '@chat/DialogCard/DialogCard';
import { SearchFormUI } from '@chat/SearchFormUI/SearchFormUI';
import clsx from 'clsx';
import styles from './search-ui.module.css';

interface Props {
	action: (formData: FormData) => void;
	openSearch?: () => void;
	closeSearch?: () => void;
	isActive?: boolean;
}

export function SearchUI({ action, openSearch, closeSearch, isActive }: Props) {
	return (
		<>
			<SearchFormUI
				action={action}
				openSearch={openSearch}
				closeSearch={closeSearch}
				isActive={isActive}
			/>
			<div className={clsx(styles.searchResults, !isActive && styles.hidden)}>
				<DialogCard />
			</div>
		</>
	);
}
