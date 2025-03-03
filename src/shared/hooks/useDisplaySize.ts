'use client';

import { BREAKPOINTS } from '@config/breakpoints.config';
import { throttle } from '@shared/utils/throttle';
import { useEffect, useState } from 'react';

export function useDisplaySize() {
	const [displayState, setDisplayState] = useState({
		isDesktop: true,
		isTablet: false,
		isMobile: false
	});

	useEffect(() => {
		const updateState = () => {
			const currentSize = window.innerWidth;
			setDisplayState({
				isMobile: currentSize <= BREAKPOINTS.mobile,
				isTablet:
					currentSize > BREAKPOINTS.mobile && currentSize <= BREAKPOINTS.tablet,
				isDesktop: currentSize > BREAKPOINTS.tablet
			});
		};

		const throttledUpdate = throttle(updateState, 300);

		updateState();

		window.addEventListener('resize', throttledUpdate);
		return () => window.removeEventListener('resize', throttledUpdate);
	}, []);

	return displayState;
}
