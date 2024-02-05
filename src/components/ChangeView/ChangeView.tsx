import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import { CONSTANTS } from 'utils/constants';
import useIsMobile from 'hooks/useIsMobile';
import { mediaQueries } from 'utils/media';

interface ChangeViewProps {
	columns: number;
	setColumns: (val: number) => void;
}

/**
 * ChangeView component to adjust the number of columns.
 * @param {ChangeViewProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const ChangeView = ({ columns, setColumns }: ChangeViewProps): JSX.Element => {
	const [actualColumns, setActualColumns] = useState<number>(columns);
	const { isMobile, isMobileSmall } = useIsMobile();

	/**
	 * Handles the click event to decrease the number of columns.
	 */
	const handleLess = () => {
		setActualColumns(val => val - 1);
	};

	/**
	 * Handles the click event to increase the number of columns.
	 */
	const handleMore = () => {
		setActualColumns(val => val + 1);
	};

	useEffect(() => {
		if (columns !== actualColumns) {
			setActualColumns(columns);
		}
	}, [columns]);

	useEffect(() => {
		setColumns(actualColumns);
	}, [actualColumns]);

	return (
		<Wrapper>
			<ViewButton
				id="less"
				onClick={handleLess}
				disabled={
					isMobileSmall ||
					(isMobile && actualColumns === 2) ||
					(!isMobile && actualColumns === 3)
				}
			>
				<RemoveIcon />
			</ViewButton>
			<ViewButton
				id="more"
				onClick={handleMore}
				disabled={
					isMobileSmall ||
					(isMobile && actualColumns === 3) ||
					(!isMobile && actualColumns === 5)
				}
			>
				<AddIcon />
			</ViewButton>
		</Wrapper>
	);
};

/**
 * Styled container for the ChangeView component.
 */
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	${mediaQueries.smallMobile`
		justify-content: center;
    `}
`;

/**
 * Styled button for the ChangeView component.
 */
const ViewButton = styled.button`
	background-color: transparent;
	border: none;
	${props =>
		props.disabled &&
		`
		opacity: 0.5;
		cursor: not-allowed;
	`}
	svg {
		fill: ${CONSTANTS.mayoral_gray};
		${mediaQueries.smallMobile`
			width: 2.5rem;
			height: 2.5rem;
		`}
	}
`;

export default ChangeView;
