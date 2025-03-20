import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomeCardComponent({ item }) {
  const getLinkHref = (itemId) => {
    if (itemId === 1) {
      return "book-categories";
    } else if (itemId === 2) {
      return "cartoon-categories";
    } else {
      return itemId.toString();
    }
  };

  return (
    <Card className="flex flex-col justify-center items-center max-w-2xl mt-10">
      <Link href={getLinkHref(item?.item_id)}>
        <div className="relative">
          <CardContent className="flex h-96 justify-center w-96 items-center relative">
            <div className="h-full w-full group relative">
              {/* Image */}
              <Image
                src={item?.image}
                alt={item?.item_name || "Item Image"}
                fill
                className="rounded-2xl duration-300 object-cover transition-opacity"
              />

             
              <div className="flex bg-black/20 justify-center rounded-4xl text-2xl text-center text-white absolute duration-300 font-medium group-hover:opacity-100 inset-0 items-center opacity-0 transition-opacity">
                {item?.item_id === 1
                  ? "View all available Book"
                  : item?.item_id === 2
                  ? "View all available Cartoon"
                  : "View all available Items"}
              </div>
            </div>

       
            <button className="flex bg-white rounded-lg text-[#087E8B] text-lg absolute font-medium gap-2 hover:opacity-100 items-center left-10 opacity-75 px-3 py-1 top-2 transition">
              <svg
                className="h-5 text-[#087E8B] w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              {item?.item_id === 1 ? "Book" : "Cartoon"}
            </button>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
