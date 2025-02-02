'use client'
import Bandage from "@/components/Bandage";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
// import Product from "@/components/ProductCloth";

import Reserved from "@/components/Reserved";
import Link from "next/link";
import React, { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline";
  size?: "icon";
  className?: string;
  [key: string]: any;
};

function Button({ children, variant = "outline", size = "icon", className, ...props }: ButtonProps) {
  const baseStyles = "rounded border font-medium flex items-center justify-center";
  const variants: Record<string, string> = {
    outline: "border-gray-400 text-gray-600 hover:bg-gray-100",
  };
  const sizes: Record<string, string> = {
    icon: "p-2 h-8 w-8",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type SelectProps = {
  options: string[];
  defaultValue: string;
};

function Select({ options, defaultValue }: SelectProps) {
  return (
    <select
      defaultValue={defaultValue}
      className="w-[180px] border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function ShopPage() {
  const [category, setCategory] = useState<string | null>(null); // State for selected category

  const handleCategoryChange = (selectedCategory: string | null) => {
    setCategory(selectedCategory); // Update selected category
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header & Navbar */}
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400">Shop</span>
        </div>
      </div>
     
     <Product />
      

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:mt-0 md:mt-28 mb-14">
        <p className="text-gray-600">Showing all results</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Views:</span>
            <div className="flex gap-1">
              
            </div>
          </div>
          <Select
            options={["Popularity", "Price: Low to High", "Price: High to Low", "Newest First"]}
            defaultValue="Popularity"
          />
          <Button className="px-4 py-2 bg-primary text-xs text-black w-20 hover:bg-primary/90">
            Filter
          </Button>
        </div>
      </div>

      {/* Static Components */}
      {/* <Product /> */}
      <Bandage />
      <Footer />
      <Reserved />
    </div>
  );
}
