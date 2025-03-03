import { MessageFormUI } from '@chat/MessageFormUI/MessageFormUI';

export function MessageForm() {
	return (
		<MessageFormUI
			action={(formData) => {
				console.log(Object.fromEntries(formData));
			}}
		/>
	);
}
