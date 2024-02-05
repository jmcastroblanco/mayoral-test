import React from 'react';
import { render } from '@testing-library/react';
import Product from '../Product';

/**
 * Test suite for the Product component.
 */
describe('Product Component', () => {
	/**
	 * Test case to ensure that the product information renders correctly.
	 */
	it('renders product information correctly', () => {
		// Test data for the Product component.
		const testData = {
			data: {
				id: 1,
				image: 'test-image-url',
				name: 'Test Product',
				price: 10,
				offerPrice: 8,
				discount: 20,
				colors: [{}, {}],
			},
		};

		// Render the Product component with test data.
		const { getByText } = render(<Product {...testData} />);

		// Assertions to check if specific elements are present in the rendered component.
		expect(getByText('Test Product')).toBeInTheDocument();
		expect(getByText('10 €')).toBeInTheDocument();
		expect(getByText('8 €')).toBeInTheDocument();
		expect(getByText('(20%)')).toBeInTheDocument();
		expect(getByText('más colores')).toBeInTheDocument();
	});
	
	/**
   * Test case to ensure that the product information renders correctly without discount and more colors.
   */
	it('renders product information correctly without discount and more colors', () => {
		// Test data for the Product component without discount and more colors.
		const testData = {
			data: {
				id: 1,
				image: 'test-image-url',
				name: 'Test Product',
				price: 10,
				offerPrice: 10,
				discount: 0,
				colors: [],
			},
		};
	
		// Render the Product component with test data.
		const { getByText, queryByText } = render(<Product {...testData} />);
	
		// Assertions to check if specific elements are not present in the rendered component.
		expect(getByText('Test Product')).toBeInTheDocument();
		expect(getByText('10 €')).toBeInTheDocument();
		expect(queryByText('(0%)')).toBeNull(); // Check that the discount is not present.
		expect(queryByText('más colores')).toBeNull(); // Check that 'más colores' is not present.
	});
});
