import { useEffect, useState } from 'react';
import { CONSTANTS } from 'utils/constants';

interface useMobileResult {
	isMobile: boolean;
	isMobileSmall: boolean;
}

/**
 * Custom hook to determine mobile device characteristics.
 * @returns {useMobileResult} - The result of the useIsMobile hook.
 */
const useIsMobile = (): useMobileResult => {
	/**
	 * State to track whether the device is considered mobile.
	 * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
	 */
	const [isMobile, setIsMobile] = useState<boolean>(false);

	/**
	 * State to track whether the device is considered a small mobile device.
	 * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
	 */
	const [isMobileSmall, setIsMobileSmall] = useState<boolean>(false);

	useEffect(() => {
		/**
		 * Handles resize events to update mobile device states.
		 */
		const handleResize = () => {
			if (typeof window !== 'undefined' && typeof document !== 'undefined') {
				const clientWidth = document.documentElement.clientWidth;
				setIsMobile(clientWidth < parseInt(CONSTANTS.mobileWidth));
				setIsMobileSmall(clientWidth < parseInt(CONSTANTS.smallMobileWidth));
			}
		};

		// Initial call to handleResize
		handleResize();

		// Event listener for resize events
		window.addEventListener('resize', handleResize);

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		isMobile,
		isMobileSmall,
	};
};

export default useIsMobile;
