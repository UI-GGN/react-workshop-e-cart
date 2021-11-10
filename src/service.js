const DOMAIN = 'http://localhost:3004';

export const getProductList = async () => {
  try {
    const response = await fetch(`${DOMAIN}/productList`);
    return response.json();
  } catch {
    throw new Error('could not fetch the default price');
  }
};
