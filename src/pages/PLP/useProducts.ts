import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { fetchDataFromServer } from 'api/service';
import { ProductInfo } from '@types';

/**
 * Result type for the useProducts hook.
 */
interface UseProductsResult {
	products: ProductInfo[];
	loading: boolean;
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

/**
 * Custom hook to manage products data.
 * @returns {UseProductsResult} - Result of the useProducts hook.
 */
const useProducts = (): UseProductsResult => {
	const [products, setProducts] = useState<ProductInfo[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>('');

	useEffect(() => {
		/**
		 * Fetch products data from the server.
		 * @returns {Promise<void>} - A Promise that resolves when the data is fetched.
		 */
		const fetchProducts = async (): Promise<void> => {
			try {
				const data = await fetchDataFromServer();
				const filteredProducts = searchTerm
				? data.filter((product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
				: data;

				setProducts(filteredProducts);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching products:', error);
				setLoading(false);
			}
		};

		fetchProducts();
	}, [searchTerm]);

	return { products, loading, searchTerm, setSearchTerm };
};

export default useProducts;

