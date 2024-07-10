export const generateSKU = (name: string) => {
  // Generate a unique identifier of a given length
  const uniqueId = Math.floor(Math.random()).toString().slice(0, 4);
  // Create the SKU by combining name, brand, and unique identifier
  const sku = `${name.slice(0, 4).toUpperCase()}-${uniqueId}`;
  return sku;
};
