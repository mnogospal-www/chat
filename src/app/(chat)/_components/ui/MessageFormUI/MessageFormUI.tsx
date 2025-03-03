import { Icon } from '@shared/components/Icon/Icon';
import { ArrowUp as Send } from 'lucide-react';
import { Plus as Attach } from 'lucide-react';
import styles from './message-form-ui.module.css';

interface Props {
	action: (formData: FormData) => void;
}

export function MessageFormUI({ action }: Props) {
	return (
		<form className={styles.messageForm} action={action}>
			<Icon>
				<Attach />
			</Icon>
			<textarea name='messageText' placeholder='Сообщение' rows={1} />
			<Icon>
				<Send />
			</Icon>
		</form>
	);
}
