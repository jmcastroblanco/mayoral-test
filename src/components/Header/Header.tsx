import styled from 'styled-components';
import React from 'react'
import SearchBar from 'components/SearchBar';
import ChangeView from 'components/ChangeView';
import { CONSTANTS } from 'utils/constants';
import { mediaQueries } from 'utils/media';

interface HeaderProps {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
	columns: number;
	setColumns: (val: number) => void;
}

/**
 * Header component containing search bar and view change controls.
 * @param {HeaderProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const Header = ({ searchTerm, setSearchTerm, columns, setColumns }: HeaderProps): JSX.Element => {
	return (
		<Wrapper>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<ChangeView columns={columns} setColumns={setColumns} />
		</Wrapper>
	);
};

/**
 * Styled container for the Header component.
 */
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: ${CONSTANTS.mayoral_max_width};
	margin: auto;
	padding: 1rem;
	box-sizing: border-box;
	${mediaQueries.smallMobile`
		flex-direction: column-reverse;
	`}
	> * {
		max-width: 50%;
		${mediaQueries.smallMobile`
			max-width: unset;
		`}
	}
`;

export default Header;
