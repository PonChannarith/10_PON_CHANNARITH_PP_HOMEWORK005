import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
const BookCardComponents = ({ book }) => {
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <>
      <div className="flex flex-col">
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
        <button className="bg-[#BFD7EA] m-3 p-2 rounded-2xl text-[#0B3954] text-md font-medium cursor-pointer" >
          READ FULL ARTICLE
        </button>
        </Link>
        <h1 className="text-lg font-semibold mt-2 sm:text-xl">
          {book.book_title}
        </h1>
      </div>

      <div>
        <p className="text-gray-700 text-sm line-clamp-3">
          {truncateDescription(book.description, 150)}
        </p>
      </div>
  
    </>
  );
};

export default BookCardComponents;
