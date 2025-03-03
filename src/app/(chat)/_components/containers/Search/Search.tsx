import { SearchUI } from '@chat/SearchUI/SearchUI';

export function Search({ ...props }) {
	return (
		<SearchUI
			action={(formData) => {
				console.log(Object.fromEntries(formData));
			}}
			{...props}
		/>
	);
}
