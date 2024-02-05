import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
	it('should call setSearchTerm with the correct value on Enter key press', () => {
		const setSearchTermMock = jest.fn();
		render(<SearchBar searchTerm="" setSearchTerm={setSearchTermMock} />);

		const inputElement = screen.getByPlaceholderText('Buscar');

		fireEvent.change(inputElement, { target: { value: 'test' } });
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		expect(setSearchTermMock).toHaveBeenCalledWith('test');
	});

	it('should call setSearchTerm with an empty string when last character is deleted', () => {
			const setSearchTermMock = jest.fn();
			render(<SearchBar searchTerm="t" setSearchTerm={setSearchTermMock} />);
		
			const inputElement = screen.getByPlaceholderText('Buscar');

			fireEvent.change(inputElement, { target: { value: '' } });
			fireEvent.keyDown(inputElement, { key: 'Backspace', code: 'Backspace' });
		
			expect(setSearchTermMock).toHaveBeenCalledWith('');
	});

	it('should update the search term on input change', () => {
		const setSearchTermMock = jest.fn();
		render(<SearchBar searchTerm="" setSearchTerm={setSearchTermMock} />);

		const inputElement = screen.getByPlaceholderText('Buscar');

		fireEvent.change(inputElement, { target: { value: 'test' } });

		expect(setSearchTermMock).toHaveBeenCalledWith('test');
	});
});
