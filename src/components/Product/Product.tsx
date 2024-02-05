import { ProductInfo } from '@types';
import Button from 'components/Button';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { CONSTANTS } from 'utils/constants';
import { mediaQueries } from 'utils/media';

interface ProductData {
    data: ProductInfo;
}

/**
 * Properties for the Product component.
 * @typedef {Object} ProductData
 * @property {ProductInfo} data - Product information.
 */

/**
 * Product component displaying product information.
 * @param {ProductData} props - The component properties.
 * @returns {JSX.Element} - The rendered component.
 */
const Product = ({ data }: ProductData): JSX.Element => {
	const { image, name, price, offerPrice, discount, colors } = data;

	return (
		<ProductWrapper>
			<Info>
				<ImageContainer>
					<StyledImage src={image} alt={name} layout="fill" objectFit="cover" />
				</ImageContainer>
				<Name>{name}</Name>
			</Info>
			<Details>
				<PriceContainer>
					<Price hasofferprice={`${discount > 0}`}>
						{`${price} €`}
					</Price>
					{discount > 0 && (
						<OfferPrice>
							{`${offerPrice} €`}
							<Discount>{`(${discount}%)`}</Discount>
						</OfferPrice>
					)}
				</PriceContainer>
				{colors.length > 0 && <More>{"más colores"}</More>}
			</Details>
			<Button
				id='add2Cart'
				onClick={() => { alert(`${name} añadido al carrito`) }}
				label='Añadir'
			/>
		</ProductWrapper>
	);
};

/**
 * Styled wrapper for the product component.
 */
const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	max-width: 15rem;
	width: 100%;
	padding: 1rem 1rem 2rem;
	border: solid 1px #0072ce;
	border-radius:.3rem;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	margin: auto;
	aspect-ratio: 0.51724;

	${mediaQueries.mobile`
		max-width: 12rem;
		padding: .7rem .7rem .5rem;
		aspect-ratio: 0.54545;
	`}
	${mediaQueries.smallMobile`
		aspect-ratio: 0.52;
	`}
`;

/**
 * Styled div for product information.
 */
const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

/**
 * Styled div for product name.
 */
const Name = styled.div`
	padding: 1.5rem 0 2.5rem;
	font-size: 1rem;
	${mediaQueries.mobile`
		padding: .5rem 0 1rem;
	`}
`;

/**
 * Styled span for product discount.
 */
const Discount = styled.span``;

interface PriceProps {
    hasofferprice: string;
}
/**
 * Styled div for product price.
 */
const Price = styled.div<PriceProps>`
	text-decoration: ${(props) => (props.hasofferprice === 'true' ? 'line-through' : 'none')};
	color: ${CONSTANTS.mayoral_price};
`;

/**
 * Styled div for offer price.
 */
const OfferPrice = styled.div`
	color: ${CONSTANTS.mayoral_offer};
`;

/**
 * Styled div for "más colores" message.
 */
const More = styled.div`
	color: ${CONSTANTS.mayoral_gray};
	padding: 1rem 0;
	${mediaQueries.mobile`
		padding: .5rem 0;
	`}
`;

/**
 * Styled div for product details.
 */
const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 5.38rem;
`;

/**
 * Styled div for price container.
 */
const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 2.25rem;
`;

/**
 * Styled div for image container.
 */
const ImageContainer = styled.div`
	width: 100%;
`;

/**
 * Styled Image component with custom styles.
 */
const StyledImage = styled(Image)`
	position: unset !important;
	object-fit: unset !important;
	inset: unset !important;
`;

export default Product;
