import { useState } from "react";
import "../Css/header.css";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header
        id="header_id"
        className="relative top-0 left-0 w-full p-2 flex mg:justify-evenly justify-between items-center gap-3 bg_header_main"
      >
        <a className=" flex w-44 p-3" href="/">
          <h1 className=" text-white font-bold text-xl">
            Anime<span className="text-pink-700">Sphere</span>{" "}
          </h1>
        </a>
        <ul
          className={`flex justify-evenly gap-3 mg:p-2 absolute top-18 md:right-20 sm:right-12 right-10 mg:top-0 mg:right-0 mg:static mg:w-5/12 w-10/12 mg:bg-transparent bg-white mg:flex-row flex-col z-30 ${
            menu
              ? " min-h-24 p-2"
              : " h-0 mg:h-auto m p-0 overflow-hidden mg:overflow-visible"
          } transition-all duration-500 ease-linear`}
        >
          <li className=" p-2 mg:text-white text-slate-500 font-bold">Anime</li>
          <li className=" p-2 mg:text-white text-slate-500 font-bold">Manga</li>
          <li className=" p-2 mg:text-white text-slate-500 font-bold">Foro</li>
        </ul>
        <div className="flex justify-evenly gap-3 min-w-32">
          <button>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
          <button className="flex justify-center items-center">
            <i className="fa-solid fa-user text-2xl text-white"></i>
          </button>
          <button
            className="flex justify-center items-center mg:hidden"
            onClick={() => handleClick()}
          >
            <i className="fa-solid fa-bars text-3xl text-teal-500"></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
