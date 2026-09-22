"use client"

import { BooksContext } from "@/contexts/BooksContext";
import { Ibook } from "@/types/Book.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}: {book: Ibook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext); 

    const handleReadBook = () => {
    //    setReadBooks((prevReadBooks)=>[...prevReadBooks, book]);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`);
    }

  return (
    <div>
      <button onClick={handleReadBook} className="btn border-slate-300 bg-white px-7 text-slate-700 hover:bg-slate-100">
        Read
      </button>
    </div>
  );
};

export default ReadButton;
