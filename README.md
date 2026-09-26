# 📚 Book Vibe

Book Vibe is a book discovery and tracking app built with Next.js. Browse a catalog of books, view details, mark books as read or add them to a wishlist, and see reading stats visualized in a chart.

## Features

- **Browse books** — explore a catalog of books on the homepage and the dedicated Books page
- **Book details** — view a book's cover, author, review, category, tags, rating, page count, publisher, and year of publishing
- **Wishlist** — add books you want to read to a wishlist
- **Mark as read** — mark books as read to track your reading history
- **Listed Books page** — view your Read and Wishlist books side by side in tabs, sortable by rating, page count, or publish year
- **Read Books stats** — a bar chart (via Recharts) visualizing the page counts of books you've read
- **Toast notifications** — instant feedback (via React Toastify) when you add a book to your wishlist or read list

## Visit

- **Live Site:** https://book-vibe-ashy-xi.vercel.app/
- **GitHub Repository:** https://github.com/theopsupcorp1009/book-vibe

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [Recharts](https://recharts.org/) for data visualization
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with:

```bash
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

This is used to fetch the book catalog from `public/booksData.json`.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Other scripts

```bash
npm run build   # Build for production
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage (banner + featured books)
│   ├── books/                    # All books listing + book detail page ([id])
│   ├── listedBooks/              # Read books & wishlist, with sorting/tabs
│   ├── readBooks/                # Reading stats bar chart
│   ├── components/
│   │   ├── homepage/             # Banner, Books grid
│   │   ├── bookDetails/          # ReadButton, WishListButton
│   │   └── shared/                # Navbar, BookCard, ListedBooksCard
│   └── layout.tsx                # Root layout
├── contexts/
│   └── BooksContext.tsx          # Global state for read books & wishlist
└── types/
    └── Book.type.ts               # Ibook type definition

public/
└── booksData.json                 # Book catalog data
```

## Data

Book data is served as static JSON from `public/booksData.json`. Each book includes an id, name, author, cover image URL, review, page count, rating, category, tags, publisher, and year of publishing. Read/wishlist state is kept in memory via React Context (`BooksContext`) and is not currently persisted between sessions.

## Summary

Book Vibe is a front-end book catalog and personal reading tracker built with Next.js, React, and TypeScript. It lets users browse books, view detailed information for each title, mark books as read, and save books to a wishlist — all backed by a static JSON dataset and shared React Context state. A dedicated stats page visualizes reading progress with a Recharts bar chart, and the UI is styled with Tailwind CSS and DaisyUI components for a clean, responsive experience.

