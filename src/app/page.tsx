import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Editor from "@/components/Editor";
import Product from "@/components/Product";
import Footer from "@/components/Footer";






export default function Home() {
  return (
    <div>
    <Header />
    <Navbar />
    <Hero />
    <Editor />
    <Product />
    <Footer />
    
    
    </div>
    
      );
}
