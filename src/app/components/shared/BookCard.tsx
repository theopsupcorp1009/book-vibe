import { Ibook } from "@/types/Book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
    book: Ibook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="card h-full overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <figure className="relative h-72 overflow-hidden bg-blue-50">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow">
            ⭐ {book.rating}
          </span>
        </div>
      </figure>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h2 className="line-clamp-2 text-xl font-bold text-slate-800">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm font-medium text-blue-600">
          by {book.author}
        </p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-slate-500">Pages</span>
              <span className="font-semibold text-slate-800">
                {book.totalPages}
              </span>
            </p>

            <p className="flex justify-between">
              <span className="text-slate-500">Published</span>
              <span className="font-semibold text-slate-800">
                {book.yearOfPublishing}
              </span>
            </p>

            <p className="flex justify-between">
              <span className="text-slate-500">Publisher</span>
              <span className="font-semibold text-slate-800 text-right">
                {book.publisher}
              </span>
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-5">
          <Link href={`books/${book.bookId}`}>
            <button className="cursor-pointer w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            View Details →
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
