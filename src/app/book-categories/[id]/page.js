import CardComponent from "@/components/BookDetailComponent";
import { getBookById } from "@/app/service/bookService";
import React from "react";

export default async function Book({ params }) {
  const { id } = await params;

  const book = await getBookById(id);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5 gap-8">
      <div className="w-full">
        <CardComponent book={book.payload} />
      </div>
    </div>
  );
}
