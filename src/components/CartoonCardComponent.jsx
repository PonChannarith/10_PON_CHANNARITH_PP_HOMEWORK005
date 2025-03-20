  import React from "react";
  import Image from "next/image";
  import { Card, CardContent } from "@/components/ui/card";
  import Link from "next/link";

  const CartoonCard = ({ cartoon }) => {
    return (
      <Card className="flex flex-col rounded-2xl shadow-lg duration-300 hover:scale-105 max-w-xs overflow-hidden transition-transform">
        <div className="h-52 w-full relative">
          <Link href={`/cartoon-categories/${cartoon.id}`}>
            <Image
              src={cartoon.image}
              alt={`Poster for ${cartoon.ct_title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="h-[100px] rounded-t-2xl"
            />
          </Link>
        </div>
        <CardContent className="m-2 -mt-2.5 mb-3 space-y-2">
          <h2 className="text-[#0B3954] text-xl font-bold line-clamp-1">
            {cartoon.ct_title || "Untitled"}
          </h2>
          <p className="
          text-[#087E8B] text-lg  font-medium line-clamp-1">
             {cartoon.ct_creator || "Unknown" }
          </p>
          <div className="flex text-gray-500 text-sm gap-4 items-center">
            <span>{cartoon.published_year?.split("-")[0] || "Unknown Year"}</span>
            <span>•</span>
            <span>{cartoon.view_count?.toLocaleString() || "0"} views</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default CartoonCard;
