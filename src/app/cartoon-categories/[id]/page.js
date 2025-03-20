import CardComponent from "@/components/CartoonDetailComponent";
import { getCartoonById } from "@/app/service/cartoonService";
import React from "react";

export default async function Book({ params }) {
  const { id } = await params;

  const cartoon = await getCartoonById(id);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5 gap-8">
      <div className="w-full">
        <CardComponent cartoon={cartoon.payload} />
      </div>
    </div>
  );
}
