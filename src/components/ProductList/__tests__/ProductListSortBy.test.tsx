import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductListSortBy from '../ProductListSortBy';

describe('ProductListSortBy Component', () => {
	it('should call onChange with the correct value when sorting option is changed', () => {
		// Arrange
		const onChangeMock = jest.fn();
		render(<ProductListSortBy value="lowToHigh" onChange={onChangeMock} />);

		// Act
		const selectElement = screen.getByLabelText('Sort By');
		fireEvent.change(selectElement, { target: { value: 'highToLow' } });

		// Assert
		expect(onChangeMock).toHaveBeenCalledWith('highToLow');
	});
});
