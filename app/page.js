"use client";
import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Tools from "./components/Tools";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Tools></Tools>
      <Contact></Contact>
    </>
  );
}
