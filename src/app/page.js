import CardComponent from "@/components/HomeCardComponent";
import { Input } from "@/components/ui/input";
import React from "react";
import Form from "next/form";
import dummyItems from "@/data/dummy-data";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  return (
    <div className="  flex flex-col  m-10 gap-5">
      <div className="relative w-[95%] mx-auto">
        <Form
          action={"/"}
          className="flex gap-3 items-center 1xl bg-[#FFFFFF] search-form"
        >
          <Input
            name="query"
            defaultValue={query || ""}
            placeholder="Search anything you want to "
            className="text-[#B9B9B9] p-5 m-2 bg-white shadow border-2 "
          />
          <div className="absolute m-3"></div>
        </Form>
        
      </div>
      <div className="border-b border-[#087E8B] w-[94%] mx-auto flex justify-between">
        <button
          type="button"
          className="text-[#087E8B] text-lg bg-[#F5F7F8]  hover:bg-[#065e66] focus:ring-4 focus:outline-none font-medium rounded-lg px-3 py-2 text-center me-2 mb-2"
        >
          Homepage
        </button>
      </div>
      <div className="grid grid-cols-3 items-center justify-center ">
        {dummyItems?.map((item) => (
          <div key={item?.item_id}>
            <CardComponent item={item} />
          </div>
        ))}
      </div>

    </div>
  );
}
