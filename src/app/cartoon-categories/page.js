import CardComponent from "@/components/CartoonCardComponent";
import { getAllCartoons } from "@/app/service/cartoonService";
import { Input } from "@/components/ui/input";
import React from "react";
import Form from "next/form";
import SearchBarComponent from "@/components/ui/SearchBarComponent";

export default async function Cartoon({ searchParams }) {
  const { query } = await searchParams;

  const cartoons = await getAllCartoons(query);
  console.log(query);

  return (
    <div className="bg-[#F5F7F8] w-full">
      <div className="w-[85%] flex flex-col bg-[#FFFFFF] mx-auto items-center py-10 px-5 gap-8 ">
        <div className="w-[95%]">
          <Form
            action={"cartoon-categories"}
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
          {cartoons?.payload?.map((cartoon) => (
            <div key={cartoon?.id} className="w-full">
              <CardComponent cartoon={cartoon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
