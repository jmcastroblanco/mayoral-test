import React, { useEffect, useState } from 'react';
import useProducts from './useProducts';
import ProductList from 'components/ProductList';
import Header from 'components/Header';
import useIsMobile from 'hooks/useIsMobile';

/**
 * Product Listing Page component.
 * @returns {JSX.Element} - JSX representation of the PLP component.
 */
const PLP: React.FC = (): JSX.Element => {
    const { products, loading, searchTerm, setSearchTerm } = useProducts();
    const { isMobile, isMobileSmall } = useIsMobile();
    const [columns, setColumns] = useState<number>(isMobile ? 3 : 4);

    useEffect(() => {
        if (isMobileSmall) {
            setColumns(2);
        }
        if (!isMobileSmall && isMobile && columns > 3) {
            setColumns(3);
        }
        if (!isMobileSmall && !isMobile && columns < 3) {
            setColumns(4);
        }
    }, [isMobile, isMobileSmall, columns]);

    return (
        <>
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                columns={columns}
                setColumns={setColumns}
            />
            <ProductList products={products} loading={loading} columns={columns} />
        </>
    );
};

export default PLP;
