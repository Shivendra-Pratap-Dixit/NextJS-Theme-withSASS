'use client'

import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import Products from "./products/page";

export default function Home() {
  return (
    <main className="container">
      <header className="head">
        <h2 className="log">Insp<span className="i">I</span>ron Labs</h2>
        <span><ThemeToggle/></span>
      </header>
      <div className="content">
        <h1 className="title">Theme Toggle in Next.JS with Sass</h1>
        {/* <ThemeToggle/> */}
        <Card/>
        <Products/>
      </div>
    </main>
  );
}
