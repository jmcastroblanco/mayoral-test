import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components';
import { CONSTANTS } from '../../utils/constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

/**
 * Button component with styled appearance.
 * @param {ButtonProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const Button: React.FC<ButtonProps> = ({ label, ...buttonProps }: ButtonProps): JSX.Element => {
	return (
		<StyledButton
			{...buttonProps}
		>
			{label}
		</StyledButton>
	);
};
  
/**
 * Styled button with Mayoral styling.
 */
const StyledButton = styled.button`
	background-color: ${CONSTANTS.mayoral_blue};
	color: ${CONSTANTS.mayoral_white};
	border: none;
	border-radius: 0.3rem;
	text-transform: uppercase;
	padding: 0.5rem 0.7rem;
`;

export default Button;
  