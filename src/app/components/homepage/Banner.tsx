import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/hero_img.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto overflow-hidden rounded-[2rem] bg-slate-200">
        <div className="grid items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-2 lg:px-16 lg:py-14">
          {/* Content */}
          <div className="space-y-6">
            <div className="badge badge-primary badge-outline font-medium">
              Discover your next favorite book
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Books to freshen up
              <br />
              <span className="text-primary">your bookshelf</span>
            </h2>

            <p className="max-w-lg text-base leading-7 text-base-content/60 md:text-lg">
              Explore inspiring stories, timeless classics, and exciting new
              reads carefully picked for every kind of reader.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/books">
                <button className="btn btn-primary rounded-xl px-6">
                  Explore Books
                </button>
              </Link>

              <Link href="">
                <button className="btn btn-ghost rounded-xl">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={BannerImage}
              alt="A collection of books"
              className="w-full max-w-md object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
