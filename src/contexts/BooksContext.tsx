"use client"

import React, {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";


interface IBooksContextType {
  readBooks: Ibook[];
  setReadBooks: Dispatch<SetStateAction<Ibook[]>>;
  wishList: Ibook[];
  setWishtList: Dispatch<SetStateAction<Ibook[]>>;
}

import { Ibook } from "@/types/Book.type";


export const BooksContext = createContext<IBooksContextType>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishtList: () => {}
});

const BooksContextProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<Ibook[]>([]);
    const [wishList, setWishtList] = useState<Ibook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishtList
    }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksContextProvider;