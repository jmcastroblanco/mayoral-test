import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { CONSTANTS } from 'utils/constants';
import { mediaQueries } from 'utils/media';

interface SearchBarProps {
	searchTerm: string;
	setSearchTerm: (val: string) => void;
}

/**
 * SearchBar component.
 * @param {SearchBarProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }: SearchBarProps): JSX.Element => {
	const [search, setSearch] = useState(searchTerm);

	/**
	 * Handles the change event of the input.
	 * @param {ChangeEvent<HTMLInputElement>} event - The change event.
	 */
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
			setSearch(event.target.value);
			if (event.target.value === '') {
				setSearchTerm(event.target.value);
			}
	};

	/**
	 * Handles the key down event of the input.
	 * @param {React.KeyboardEvent<HTMLInputElement>} event - The key down event.
	 */
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
			if (event.key === 'Enter') {
				setSearchTerm(search);
			}
			if (event.currentTarget.value === '') {
				setSearchTerm(event.currentTarget.value);
			}
	};

	return (
		<Search>
			<SearchContainer>
				<Input
					type="text"
					id="search"
					name="search"
					placeholder="Buscar"
					value={search}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<SearchIcon />
			</SearchContainer>
		</Search>
	);
};

/**
 * Styled container for the search bar.
 */
const Search = styled.div`
	width: 100%;
	box-sizing: border-box;
	${mediaQueries.smallMobile`
		padding: 2rem 0 2.5rem;
		border-bottom: solid 1px #A9A9A9;
	`}
`;

/**
 * Styled container for the search input and icon.
 */
const SearchContainer = styled.div`
	position: relative;
	width: 100%;
	svg {
		position: absolute;
		top: 50%;
		left: 0.4rem;
		transform: translateY(-50%);
		fill: ${CONSTANTS.mayoral_gray};
	}
`;

/**
 * Styled search input.
 */
const Input = styled.input`
	height: 2rem;
	padding: 0 0 0 2rem;
	width: 100%;
	min-width: 23.5rem;
	border: solid 1px ${CONSTANTS.mayoral_gray};
	border-radius: 0.3rem;
	box-sizing: border-box;
	${mediaQueries.smallMobile`
		min-width: unset;
	`}
	&:focus {
		outline: none !important;
		border-color: ${CONSTANTS.mayoral_blue};
	}
`;

export default SearchBar;
