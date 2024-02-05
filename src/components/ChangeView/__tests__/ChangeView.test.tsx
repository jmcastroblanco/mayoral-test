import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeView from '../ChangeView';

describe('ChangeView Component', () => {
	it('should not change columns when "More" button is clicked and disabled in mobile', () => {
		window.innerWidth = 600;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={3} setColumns={setColumnsMock} />);

		// Act
		const moreButton = screen.getByTestId('more');
		fireEvent.click(moreButton);

		// Assert
		expect(setColumnsMock).not.toHaveBeenCalled();
	});

	it('should decrease columns when "Less" button is clicked in mobile', () => {
		window.innerWidth = 600;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={3} setColumns={setColumnsMock} />);

		// Act
		const lessButton = screen.getByTestId('less');
		fireEvent.click(lessButton);

		// Assert
		expect(setColumnsMock).toHaveBeenCalledWith(2);
	});

	it('should decrease columns when "More" button is clicked in mobile', () => {
		window.innerWidth = 600;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={2} setColumns={setColumnsMock} />);

		// Act
		const moreButton = screen.getByTestId('more');
		fireEvent.click(moreButton);

		// Assert
		expect(setColumnsMock).toHaveBeenCalledWith(3);
	});

	it('should not change columns when "Less" button is clicked and disabled in mobile', () => {
		window.innerWidth = 600;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={2} setColumns={setColumnsMock} />);

		// Act
		const lessButton = screen.getByTestId('less');
		fireEvent.click(lessButton);

		// Assert
		expect(setColumnsMock).not.toHaveBeenCalled();
	});

	it('should not change columns when "More" button is clicked and disabled in desktop', () => {
		window.innerWidth = 1200;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={5} setColumns={setColumnsMock} />);

		// Act
		const moreButton = screen.getByTestId('more');
		fireEvent.click(moreButton);

		// Assert
		expect(setColumnsMock).not.toHaveBeenCalled();
	});

	it('should not change columns when "Less" button is clicked and disabled in desktop', () => {
		window.innerWidth = 1200;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={3} setColumns={setColumnsMock} />);

		// Act
		const lessButton = screen.getByTestId('less');
		fireEvent.click(lessButton);

		// Assert
		expect(setColumnsMock).not.toHaveBeenCalled();
	});

	it('should not change columns when "More" button is clicked and disabled in desktop', () => {
		window.innerWidth = 1200;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={3} setColumns={setColumnsMock} />);

		// Act
		const moreButton = screen.getByTestId('more');
		fireEvent.click(moreButton);

		// Assert
		expect(setColumnsMock).toHaveBeenCalledWith(4);
	});

	it('should not change columns when "Less" button is clicked and disabled in desktop', () => {
		window.innerWidth = 1200;
		window.innerHeight = 800;
		// Arrange
		const setColumnsMock = jest.fn();
		render(<ChangeView columns={4} setColumns={setColumnsMock} />);

		// Act
		const lessButton = screen.getByTestId('less');
		fireEvent.click(lessButton);

		// Assert
		expect(setColumnsMock).toHaveBeenCalledWith(3);
	});
});
