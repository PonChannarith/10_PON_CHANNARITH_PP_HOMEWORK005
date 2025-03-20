export const getAllCartoons = async (query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/cartoon${
      query ? `?search=${encodeURIComponent(query)}` : ""
    }`
  );
  const cartoons = await response.json();
  return cartoons;
};

export const getCartoonById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/cartoon/${id}`
  );
  const cartoon = await response.json();
  return cartoon;
};
