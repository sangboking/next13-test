"use client";

import React from "react";

import Vercel from "../../public/vercel.svg";

function Home() {
  const remToPixels = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div>
      <Vercel width={remToPixels(4)} height={remToPixels(4)} />
    </div>
  );
}

export default Home;
