import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';

// Mocking the Product component to simplify the test
jest.mock('components/Product', () => ({ data }: { data: { name: string } }) => <div>{data.name}</div>);

const products = [
	{"id":16,"name":"Dodge","price":99,"discount":20,"offerPrice":79.2,"image":"http://dummyimage.com/250x250.png/cc0000/ffffff","colors":[{},{}]},
	{"id":17,"name":"Volkswagen","price":62,"discount":5,"offerPrice":58.9,"image":"http://dummyimage.com/250x250.png/5fa2dd/ffffff","colors":[{},{},{},{},{}]},
	{"id":18,"name":"Infiniti","price":52,"discount":20,"offerPrice":41.6,"image":"http://dummyimage.com/250x250.png/cc0000/ffffff","colors":[{},{},{},{}]},
	{"id":19,"name":"Spyker","price":82,"discount":0,"offerPrice":82,"image":"http://dummyimage.com/250x250.png/cc0000/ffffff","colors":[{}]}
];

describe('ProductList Component', () => {
  it('renders products correctly', () => {
    render(<ProductList products={products} loading={false} columns={3} />);
    
    // Check if products are rendered
    expect(screen.getByText('Dodge')).toBeInTheDocument();
    expect(screen.getByText('Volkswagen')).toBeInTheDocument();
    expect(screen.getByText('Infiniti')).toBeInTheDocument();
    expect(screen.getByText('Spyker')).toBeInTheDocument();
  });

  it('handles empty state correctly', () => {
    render(<ProductList products={[]} loading={false} columns={3} />);

    // Check if a message indicating no products are displayed
    expect(screen.getByText('No se han encontrado productos')).toBeInTheDocument();
  });
});
