import { Icon } from '@shared/components/Icon/Icon';
import { ArrowLeft as ToDialogList } from 'lucide-react';
import { Search } from 'lucide-react';
import styles from './search-form-ui.module.css';

interface Props {
	action: (formData: FormData) => void;
	openSearch?: () => void;
	closeSearch?: () => void;
	isActive?: boolean;
}

export function SearchFormUI({
	action,
	openSearch,
	closeSearch,
	isActive
}: Props) {
	return (
		<form className={styles.searchFrom} action={action} onFocus={openSearch}>
			<header>
				{isActive && (
					<Icon onClick={closeSearch}>
						<ToDialogList />
					</Icon>
				)}

				<div className={styles.searchInput}>
					<Icon>
						<Search />
					</Icon>
					<input type='text' name='search' placeholder='Поиск' />
				</div>
			</header>

			{isActive && (
				<div className={styles.searchParams}>
					<div>
						<input
							type='radio'
							id='users'
							name='searchBy'
							value='users'
							defaultChecked
						/>
						<label htmlFor='users'>Пользователи</label>
					</div>

					<div>
						<input type='radio' id='dialogs' name='searchBy' value='dialogs' />
						<label htmlFor='dialogs'>Диалоги</label>
					</div>
				</div>
			)}
		</form>
	);
}
