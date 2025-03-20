import React from "react";

export default function SearchBarComponent({ bookCategories }) {
  return (
    <div>
      <div className="flex justify-between w-full items-center mt-8">
        {/* Button */}
        <button
          type="button"
          className="bg-[#F5F7F8] border-2 border-gray-200 rounded-lg text-[#087E8B] text-md dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:z-10 font-medium hover:bg-gray-100 hover:text-blue-700 px-5 py-2.5"
        >
          All Books
        </button>

        {/* Dropdown */}
        <select className="bg-[#F5F7F8] border-2 rounded-md text-gray-900 focus:ring-2 px-4 py-2">
          <option value="" className="text-gray-700">
            Filter by category
          </option>

          {bookCategories?.map((category, index) => (
            <option key={index} value={category.id} className="text-gray-700">
              {category.book_cate_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
