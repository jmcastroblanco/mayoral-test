import { css } from 'styled-components';
import { CONSTANTS } from './constants';

/**
 * Sizes for different media queries.
 */
const mediaQueries = {
	/**
	 * Media query for desktop large screens.
	 */
	desktopLarge: (style: TemplateStringsArray | string) =>
		css`
			@media (min-width: ${CONSTANTS.desktopLarge}px) {
				${style}
			}
		`,
	/**
	 * Media query for mobile screens.
	 */
	mobile: (style: TemplateStringsArray | string) =>
		css`
			@media (max-width: ${CONSTANTS.mobileWidth}px) {
				${style}
			}
		`,
	/**
	 * Media query for small mobile screens.
	 */
	smallMobile: (style: TemplateStringsArray | string) =>
		css`
			@media (max-width: ${CONSTANTS.smallMobileWidth}px) {
				${style}
			}
		`,
};

export { mediaQueries };