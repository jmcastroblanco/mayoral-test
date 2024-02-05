import { ProductInfo } from '@types';
import products from './products.json';

/**
 * Reads product data.
 * @returns {Promise<ProductInfo[]>} A promise that resolves to an array of products.
 */
const readProducts = async (): Promise<ProductInfo[]> => {
  try {
    return products as ProductInfo[];
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

/**
 * Simulates a server request to fetch product data.
 * @returns {Promise<ProductInfo[]>} A promise that resolves to an array of products.
 */
const simulateServerRequest = async (): Promise<ProductInfo[]> => {
  const productos = await readProducts();
  return new Promise<ProductInfo[]>((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

/**
 * Fetches product data from the server.
 * @returns {Promise<ProductInfo[]>} A promise that resolves to an array of products.
 */
export const fetchDataFromServer = async (): Promise<ProductInfo[]> => {
  try {
    const data = await simulateServerRequest();
    return data;
  } catch (error) {
    console.error('Error getting server data:', error);
    // If an error occurs, it return an empty array.
    return [];
  }
};
