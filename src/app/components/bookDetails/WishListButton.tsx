"use client";

import { BooksContext } from "@/contexts/BooksContext";
import { Ibook } from "@/types/Book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: Ibook }) => {
  const { wishList, setWishtList } = useContext(BooksContext);

  const handleWishList = () => {
    //    setReadBooks((prevReadBooks)=>[...prevReadBooks, book]);
    setWishtList([...wishList, book]);
    toast.success(`${book.bookName} added to wishlist`);
  };

  return (
    <div>
      <button
        onClick={handleWishList}
        className="btn border-0 bg-blue-500 px-7 text-white hover:bg-blue-600"
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
