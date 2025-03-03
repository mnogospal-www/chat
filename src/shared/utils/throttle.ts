export function throttle<T extends (...args: any[]) => any>(
	callee: T,
	timeout: number
) {
	let timer: ReturnType<typeof setTimeout> | null = null;
	let lastArgs: Parameters<T> | null = null;

	return function perform(...args: Parameters<T>): void {
		if (timer) {
			lastArgs = args;
			return;
		}

		callee(...args);

		timer = setTimeout(() => {
			timer = null;
			if (lastArgs) {
				perform(...lastArgs);
				lastArgs = null;
			}
		}, timeout);
	};
}
