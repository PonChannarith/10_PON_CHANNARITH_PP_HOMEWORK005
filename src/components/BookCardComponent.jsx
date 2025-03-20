import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const BookCardComponents = ({ book }) => {
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <>
      <div className="flex flex-col bg-white shadow-lg rounded-2xl">
        <Card className="h-[250px] rounded-2xl">
          <div className="h-full w-[300px] relative">
            <Image
              src={book.image}
              alt={book.book_title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
        </Card>
        <Link href={`/book-categories/${book.id}`}>
          <button className="bg-[#BFD7EA] mt-4 p-2 w-full rounded-2xl text-[#0B3954] text-md font-medium cursor-pointer">
            READ FULL ARTICLE
          </button>
        </Link>
        <h1 className="text-lg font-semibold mt-2 mx-auto p-1">{book.book_title}</h1>
        <p className="text-gray-700 text-sm mb-3 mx-auto text-justify line-clamp-2 p-1">
          {truncateDescription(book.description, 150)}
        </p>
      </div>
    </>
  );
};

export default BookCardComponents;
