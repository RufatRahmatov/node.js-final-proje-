// components/Header.js
import Link from "next/link";

export default function Shopimg() {
  return (
    <header
      className="relative bg-cover bg-center h-[200px] flex items-center justify-center "
      style={{
        backgroundImage:
          "url('https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_collections.jpg?v=1711247313')",
      }}
    >
      <div className="absolute inset-0  opacity-30 ]"></div>{" "}
      <div className="container relative mx-auto flex flex-col items-center md:items-start text-white text-center md:text-left px-4 md:px-8 z-10">
        <h1 className="text-5xl font-medium text-black">Shop</h1>
        <nav className="mt-4">
          <ul className="flex justify-center items-center space-x-4 text-center ">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover-underline-animation text-black">Home</a>
              </Link>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span className="text-black">Shop</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
