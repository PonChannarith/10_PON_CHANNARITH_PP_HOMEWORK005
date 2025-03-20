import React from 'react'
import SearchBarComponent from './SearchBarComponent';

export default async function FilterComponent() {
    const bookCategories =await getAllBookCategories();
    console.log("Book categories ",bookCategories);
  return (
    <div>
      <SearchBarComponent bookCategories={bookCategories} />
    </div>
  )
}
