"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBarComponent({ bookCategories = [] }) { 
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (value === "") {
      router.push("/book-categories");
    } else {
      router.push(`/book-categories?query=${value}`);
    }

    console.log("Selected category ID:", value);
  };

  // ✅ Fix the category name lookup
  const selectedCategoryName = bookCategories.find(
    (category) => String(category.id) === String(selectedCategory)
  )?.book_cate_name || "All Books";

  return (
    <div>
      <div className="flex justify-between w-full items-center mt-8">
        <button
          type="button"
          className="bg-[#F5F7F8] border-2 border-gray-200 rounded-lg text-[#087E8B] text-md dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:z-10 font-medium hover:bg-gray-100 hover:text-blue-700 px-5 py-2.5"
          onClick={() => router.push("/book-categories")}
        >
          All Books
        </button>

        <select
          value={selectedCategory}
          onChange={handleChange}
          className="bg-[#F5F7F8] border-2 rounded-md text-gray-900 focus:ring-2 px-4 py-2"
        >
          <option value="">{selectedCategoryName}</option>
          {bookCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.book_cate_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
