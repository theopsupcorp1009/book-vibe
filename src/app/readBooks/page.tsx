"use client";

import { BooksContext } from "@/contexts/BooksContext";
import { Ibook } from "@/types/Book.type";
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);
  const data = readBooks.map((book: Ibook, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });
  return (
    <div className="container mx-auto my-10 flex justify-center items-center">
      {readBooks.length>0 ? (<BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <Tooltip cursor={{ fillOpacity: 0.5 }} />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Bar dataKey="uv" shape={TriangleBar} activeBar>
          <LabelList content={CustomColorLabel} position="top" />
        </Bar>
      </BarChart>) : (<div className="flex min-h-[75vh] items-center justify-center">
            <div className="w-full max-w-lg rounded-[30px] border border-blue-100 bg-white px-6 py-14 text-center shadow-[0_15px_50px_rgba(37,99,235,0.08)]">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 text-4xl shadow-inner">
                📚
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Your Reading Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
                Your story starts here.
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
                Once you finish your first book, your reading
                statistics and progress will appear here.
              </p>

            </div>
          </div>)}
    </div>
  );
};

export default ReadBooks;
