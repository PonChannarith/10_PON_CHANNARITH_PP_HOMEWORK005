import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const CartoonDetailsComponent = ({ cartoon }) => {
  if (!cartoon) {
    return <div>Loading...</div>;
  }

  const {
    id,
    ct_title,
    ct_creator,
    image,
    view_count,
    published_year,
    ct_description,
  } = cartoon;

  return (
    <main className="p-5">
      <div className="mb-5">
        <ul className="flex text-[#0B3954] font-semibold items-center space-x-4">
          {/* Home Link */}
          <li className="flex text-[#0B3954] items-center">
            <Link href="/" className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#0B3954"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
              Home
              <svg
                className="h-4 m-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#0B3954"
              >
                <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
              </svg>
            </Link>
          </li>

          {/* Categories Link */}
          <li className="flex items-center">
            <Link href="/cartoon-categories" className="flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#0B3954"
              >
                <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z" />
              </svg>
              Old School Cartoon
              <svg
                className="h-4 m-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#0B3954"
              >
                <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
              </svg>
            </Link>
          </li>

          {/* Book Title */}
          <li className="flex text-[#C81D25] items-center">
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#C81D25"
            >
              <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" />
            </svg>
            {ct_title}
          </li>
        </ul>
      </div>

      <Card className="flex flex-col bg-white p-4 rounded-lg shadow-lg gap-6 items-center md:flex-row-reverse md:items-start">
        <div className="p-6 rounded-lg w-full"
        >
          {/* Image Section */}
          <div className="flex h-72 rounded-2xl w-56 items-end md:mx-0 md:w-full mx-auto relative">
            <div className="h-72 w-56 relative">
              <Image
                src={image}
                alt={ct_title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <CardContent className="text-center md:text-left space-y-4">
          <h1 className="text-2xl text-gray-900 font-bold">{ct_title}</h1>
          <p className="text-gray-600 font-bold">
            by <span className="text-[#087E8B]">{ct_creator}</span>
          </p>
          <p className="text-gray-600 text-md font-medium">
            Published:{" "}
            {published_year
              ? new Date(published_year).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown"}
          </p>
          <p className="text-gray-600 text-md font-medium">
            Views: {view_count ? view_count.toLocaleString() : 0} views
          </p>
          <p className="text-[#0B3954] text-justify">{ct_description}</p>
        </CardContent>
      </Card>
    </main>
  );
};

export default CartoonDetailsComponent;
