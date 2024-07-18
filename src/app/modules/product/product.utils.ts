export const generateSlug = (name: string) => {
  // Generate a unique identifier of a given length
  const uniqueId = Math.random().toString().split('.')[1];
  // Create the SKU by combining name, brand, and unique identifier
  const slug = `${name.toLowerCase().split(' ').join('-')}-${uniqueId}`;
  return slug;
};
