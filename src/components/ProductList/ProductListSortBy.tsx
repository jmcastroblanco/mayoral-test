import { SortBy } from '@types';
import React from 'react';
import styled from 'styled-components';
import { CONSTANTS } from 'utils/constants';
import SortIcon from '@mui/icons-material/Sort';

interface SortByProps {
	value: SortBy;
	onChange: (value: SortBy) => void;
}

/**
 * ProductListSortBy component for selecting sorting options.
 * @param {SortByProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const ProductListSortBy: React.FC<SortByProps> = ({ value, onChange }: SortByProps): JSX.Element => {
	/**
	 * Handles changes in the sorting option.
	 * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
	 */
	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value as SortBy);
	};

	return (
		<Sort>
			<Label htmlFor="sortBy"><SortIcon /></Label>
			<select id="sortBy" value={value} onChange={handleOnChange}>
				<option value="lowToHigh">Precio más bajo</option>
				<option value="highToLow">Precio más alto</option>
			</select>
		</Sort>
	);
};

/**
 * Styled container for the sorting component.
 */
const Sort = styled.div`
	width: 100%;
	margin: auto;
	max-width: ${CONSTANTS.mayoral_max_width};
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	box-sizing: border-box;
	select:focus { 
		outline: none !important;
		border-color: ${CONSTANTS.mayoral_blue};
 	}
`;

/**
 * Styled label for the sorting component.
 */
const Label = styled.label`
	margin-right: 0.5rem;
`;

export default ProductListSortBy;

