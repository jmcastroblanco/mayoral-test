import { SortBy, ProductInfo } from '@types';
import Product from 'components/Product';
import React, { useState , useEffect, useMemo} from 'react';
import styled from 'styled-components';
import { CONSTANTS } from 'utils/constants';
import ProductListSortBy from './ProductListSortBy';

interface ProductListProps {
	products: ProductInfo[];
	loading: boolean;
	columns: number;
}

/**
 * ProductList component for displaying a list of products.
 * @param {ProductListProps} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const ProductList = ({ products, loading, columns }: ProductListProps): JSX.Element => {
	const [actualColumns, setActualColumns] = useState<number>(columns);
	const [sortBy, setSortBy] = useState<SortBy>('lowToHigh');

	/**
	 * Memoized sorted products based on the selected sorting method.
	 * @type {ProductInfo[]}
	 */
	const sortedProducts = useMemo(() => {
		return [...products].sort((a, b) => {
			if (sortBy === 'lowToHigh') {
				return a.offerPrice - b.offerPrice;
			} else if (sortBy === 'highToLow') {
				return b.offerPrice - a.offerPrice;
			}
			return 0;
		});
	}, [products, sortBy]);

	useEffect(() => {
		setActualColumns(columns);
	}, [columns]);

	/**
	 * Handles changes in the sorting method.
	 * @param {SortBy} value - The selected sorting method.
	 */
	const handleOrderByChange = (value: SortBy) => {
		setSortBy(value);
	};
	
	return (
		<>
			{
				sortedProducts.length > 0 ?
					<>
						<ProductListSortBy value={sortBy} onChange={handleOrderByChange} />
						<List columns={actualColumns}>
							{
								!loading && sortedProducts.map((prod, index) =>
									<Product key={`${prod.name}-${index}`} data={prod} />
								)
							}
						</List>
					</>
				:
					<Empty>No se han encontrado productos</Empty>
			}
		</>
	);
};

interface ListProps {
	columns: number
}
/**
 * Styled grid for displaying products.
 */
const List = styled.div<ListProps>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
	grid-gap: 1rem;
	align-items: stretch;
	max-width: ${CONSTANTS.mayoral_max_width};
	margin: auto;
	justify-content: center;
	padding: 0 1rem;
	box-sizing: border-box;
`;

const Empty = styled.div`
	max-width: ${CONSTANTS.mayoral_max_width};
	width: 100%;
	text-align: center;
	margin: auto;
	padding: 5rem;
`;

export default ProductList;
