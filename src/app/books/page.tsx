import Image from "next/image";
import React from "react";
import { Ibook } from "@/types/Book.type";
import BookCard from "../components/shared/BookCard";

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data");
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Discover your next favorite book from our collection of timeless
          classics, inspiring stories, and exciting reads.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book: Ibook, index: number) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
