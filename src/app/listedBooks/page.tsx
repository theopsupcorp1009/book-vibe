"use client";

import { BooksContext } from "@/contexts/BooksContext";
import { useContext, useState } from "react";
import { Ibook } from "@/types/Book.type";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const ListedBooksPage = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  
  const sortBooks = (books: Ibook[]) => {
    const sortedBooks = [...books];
     if(sortBy==='rating'){
      sortedBooks.sort((a,b)=>b.rating - a.rating);
    }else if(sortBy==='pages'){
      sortedBooks.sort((a,b)=>b.totalPages - a.totalPages);
     }else if(sortBy=='year'){
      sortedBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing);
     }
     return sortedBooks;
  }
  
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishtList = sortBooks(wishList);

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="text-center my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl">
        Listed Books
      </h2>

      <div className="text-center mb-5">
        <select 
        value={sortBy}
        onChange={(e)=>setSortBy(e.target.value as "rating" | "pages" | "year")}
        className="select select-success">
        <option disabled={true}>Sort by</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of Pages</option>
        <option value={"year"}>Published Year</option>
      </select>
      </div>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: Ibook) => {
              return <ListedBooksCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wisht List (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishtList.length > 0 ? (
            sortedWishtList.map((book: Ibook) => {
              return <ListedBooksCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-lg font-semibold">Wishlist Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
