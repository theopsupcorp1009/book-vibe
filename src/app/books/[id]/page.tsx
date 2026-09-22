import { Ibook } from "@/types/Book.type";
import Image from "next/image";
import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";

interface IBookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
 try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await response.json();
  return data;
  }catch(error){
    console.error("Failed to fetch data");
    return [];
  }
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(id),
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Book Image */}
        <div className="flex items-center justify-center">
          <div className="relative h-[620px] w-full max-w-[500px] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-fit h-full"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-center">
          {/* Book Name */}
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-base text-slate-600">
            By :{" "}
            <span className="font-medium text-slate-800">{book.author}</span>
          </p>

          <div className="my-5 h-px bg-slate-200" />

          {/* Category */}
          <p className="text-base font-medium text-slate-700">
            {book.category}
          </p>

          <div className="my-5 h-px bg-slate-200" />

          {/* Review */}
          <div>
            <p className="text-justify text-sm leading-7 text-slate-500">
              <span className="font-bold text-slate-800">Review :</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex items-center gap-3">
            <span className="font-bold text-sm text-slate-800">Tag</span>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="my-5 h-px bg-slate-200" />

          {/* Book Details */}
          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <p className="flex justify-between sm:justify-start sm:gap-10">
              <span className="text-slate-500">Number of Pages:</span>
              <span className="font-semibold text-slate-800">
                {book.totalPages}
              </span>
            </p>

            <p className="flex justify-between sm:justify-start sm:gap-10">
              <span className="text-slate-500">Publisher:</span>
              <span className="font-semibold text-slate-800">
                {book.publisher}
              </span>
            </p>

            <p className="flex justify-between sm:justify-start sm:gap-10">
              <span className="text-slate-500">Year of Publishing:</span>
              <span className="font-semibold text-slate-800">
                {book.yearOfPublishing}
              </span>
            </p>

            <p className="flex justify-between sm:justify-start sm:gap-10">
              <span className="text-slate-500">Rating:</span>
              <span className="font-semibold text-slate-800">
                ⭐ {book.rating}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;
