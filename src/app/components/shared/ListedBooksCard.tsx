import { Ibook } from "@/types/Book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListedBooksCard = ({ book }: { book: Ibook }) => {
  return (
      <div
        key={book.bookId}
        className="group flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)] sm:flex-row"
      >
        {/* Book Image */}
        <div className="relative h-[380px] w-full shrink-0 overflow-hidden bg-blue-50 sm:h-auto sm:w-72">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 640px) 100vw, 288px"
            className="object-fit transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-white/10" />

          {/* Rating badge */}
          <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-sm font-semibold text-amber-500 shadow-sm backdrop-blur-sm">
            ⭐ {book.rating}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          {/* Category */}
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              {book.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-800 sm:text-3xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-sm font-semibold text-blue-600">
            By {book.author}
          </p>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-gradient-to-r from-blue-100 via-slate-100 to-transparent" />

          {/* Review */}
          <p className="line-clamp-3 text-justify text-sm leading-7 text-slate-500">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-100 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Details */}
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50/70 p-4 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Pages
              </p>
              <p className="mt-1 font-bold text-slate-700">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Published
              </p>
              <p className="mt-1 font-bold text-slate-700">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Publisher
              </p>
              <p className="mt-1 truncate font-bold text-slate-700">
                {book.publisher}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link href={`/books/${book.bookId}`}>
              <button className="btn btn-primary rounded-xl px-7 font-semibold shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
                View Details
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ListedBooksCard;
