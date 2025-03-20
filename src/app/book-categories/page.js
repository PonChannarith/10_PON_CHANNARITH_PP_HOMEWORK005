import CardComponent from "@/components/BookCardComponent";
import { getAllBookCategories, getAllBooks } from "@/app/service/bookService";
import { Input } from "@/components/ui/input";
import Form from "next/form";
import SearchBarComponent from "@/components/ui/SearchBarComponent";

export default async function Book({ searchParams }) {
  const { query } = await searchParams;

  const books = await getAllBooks(query);
  const bookCategories = await getAllBookCategories();

  return (
    <div className="max-w-screen bg-gray-100 flex flex-col items-center py-10 px-5 gap-8">
      <div className="w-[85%]">
        <Form
          action={"book-categories"}
          className="flex gap-3 items-center w-full"
        >
          <Input
            name="query"
            defaultValue={query || ""}
            placeholder="Search any thing you want to"
            className="flex-1 p-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
       
        </Form>
        {/* Search bar */}
      <SearchBarComponent />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {books?.payload?.map((book) => (
          <div key={book?.id} className="w-full">
            <CardComponent book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
