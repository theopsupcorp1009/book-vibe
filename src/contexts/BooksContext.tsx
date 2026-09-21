"use client"

import React, { ReactNode, useState, createContext } from "react";

export const BooksContext = createContext({});

const BooksContextProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishtList] = useState([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishtList
    }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksContextProvider;