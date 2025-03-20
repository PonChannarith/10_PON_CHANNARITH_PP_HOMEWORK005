export const getAllBooks = async (query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book${
      query ? `?search=${encodeURIComponent(query)}` : ""
    }`
  );
  const books = await response.json();
  return books;
};

export const getBookById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book/${id}`
  );

  const book = await response.json();
  return book;
};

export const getAllBookCategories = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book_category`
  );

  const bookCategories = await response.json();
  return bookCategories;
};
