"use client";
import Navbar from "./components/navbar";
import { Info } from "./components/header/main";
import { Links } from "./components/header/links";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Projects from "./components/projects/main";
import React, { useState, useEffect } from 'react';

// Define the Home component
export default function Home() {
  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <main className="min-h-screen w-full font-sans text-white">
      <Navbar scrollToTop={scrollToTop}/>
      <Info/>

      <div id="info" className="h-auto w-full flex flex-col items-center max-w-[650px] mx-auto gap-8 ">
        <Links />
        <div className="w-full rounded-xl p-4 shadow-md text-zinc-200/90 text-lg">
          <p className="leading-7">
            Hi, I'm Joona &nbsp;—&nbsp; A dedicated Master of Science in Data-Centric Engineering.
            My academic journey is driven by intense passion for&nbsp;
            <span className="text-white">Computer Vision</span>,&nbsp;
            <span className="text-cyan-500">Artificial Intelligence</span>, and&nbsp;
            <span className="text-red-500">Data Science</span>.
          </p>

        </div>
        {/* Divider */}
        <div className="divider" />

        {/* Timeline */}
        <Timeline />

        <div className="divider" />
        <Projects />


        <div className="divider" />

        < Skills />
        {/* <div className="divider" />
        <div className="max-w-[880px] pt-4 px-10">
          <div className="w-[800px] h-72 bg-[#141414]">

          </div>
        </div> */}


        <div className="divider" />

        <div className="w-full h-24 flex items-center gap-4 mb-8 justify-center mb-72">
          <h1 className="text-xl">Thanks for scrolling :)</h1>
          {/* <button className="btn btn-ghost p-2 w-14" onClick={scrollToTop}>
            <svg fill="#a1a1aa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 animate-bounce">
              <path d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002zm7.506-1.5-4.507-4.751-4.507 4.751h3.008v10.022h2.998v-10.022z" /></svg>

          </button> */}

        </div>

      </div>

    </main >
  );
}