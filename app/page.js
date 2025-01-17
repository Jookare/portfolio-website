"use client";
import Navbar from "./components/navbar";
import { Info } from "./components/header/main";
import { Links } from "./components/header/links";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Projects from "./components/projects/main";
import React from "react";

// Define the Home component
export default function Home() {
  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen w-full font-sans text-white">
      <Navbar scrollToTop={scrollToTop} />
      <Info />
      <div
        id="info"
        className="h-auto max-w-[650px] px-4 w-full flex flex-col items-center mx-auto sm:gap-4 gap-2"
      >
        <Links />
        <Introduction />
        {/* <Divider /> */}
        {/* <Timeline /> */}
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}


// Introduction component
function Introduction() {
  return (
    <div className="w-full rounded-xl text-zinc-200/90 sm:text-lg px-4">
      <p className="leading-7">
        Hi, I&apos;m Joona — a PhD student specializing in Computer Vision.
        I&apos;m interested in {' '}
        <span className="text-white">Artificial Intelligence</span>,{" "}
        <span className="text-red-400">Data Science</span>,{" "} and {" "}
        <span className="text-cyan-400">Practical Research</span>.
      </p>
    </div>
  );
}

function Divider() {
  return <div className="divider" />;
}


// Footer component
function Footer() {
  return (
    <div className="w-full flex items-center gap-4 justify-center pt-4 xs:pb-16 pb-10 px-4">
      <h1 className="xs:text-lg text-zinc-400/90">
        Built with{" "}
        <a
          href="https://nextjs.org"
          className="hover:underline transition-all duration-100 hover:text-zinc-200"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          className="hover:underline transition-all duration-100 hover:text-zinc-200"
        >
          Tailwind
        </a>
        {" "}and{" "}
        <a
          href="https://vercel.com"
          className="hover:underline transition-all duration-100 hover:text-zinc-200"
        >
          Vercel
        </a>
      </h1>
    </div>
  );
}
