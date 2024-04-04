import { useEffect, useState } from "react";
import "../Css/carrusel.css";
import axios from "axios";
import type { Anime } from "../Types/type";

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsData, setCardsData] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllAnimes = async () => {
      try {
        const response = await axios("https://api.anime-dex.workers.dev/home");
        const data = response.data ? response.data.results.anilistTrending : [];
        setCardsData(data);
      } catch (error) {
        setCardsData([]);
      }
      setLoading(false);
    };
    getAllAnimes();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const visibleCardIndex = currentIndex % cardsData.length;
  const visibleCard: Anime = cardsData[visibleCardIndex];

  if (loading) return <h1>.......</h1>;
  return (
    <main className=" w-11/12 p-2 flex justify-center relative m-auto mt-5">
      <button
        onClick={handlePrev}
        className=" text-slate-400 bg_btn_navigation rounded-md p-2 absolute top-1/2 z-10 -left-5 h-16 w-16"
      >
        <i className="fa-solid fa-arrow-left text-white text-xl -rotate-45"></i>
      </button>
      <figure className=" relative w-full aspect-video p-1 flex justify-center items-center transition-all rounded-lg slider_container">
        <img
          src={visibleCard.bannerImage}
          alt={visibleCard.title.english}
          className=" flex h-[540px] w-full rounded-md text-white"
        />
        <div className=" absolute bottom-18 left-7 z-10 flex flex-col gap-4 text-white">
          <h1 className=" text-4xl font-bold">
            {visibleCard.title.english || visibleCard.title.userPreferred}
          </h1>
          <h4 className=" text-sm">
            {visibleCard.season ? ` ${visibleCard.season}` : ""}
          </h4>
          <div className="w-full flex items-center gap-3">
            <span className="bg_slate p-4 rounded-lg text-white font-bold">
              <i className="fa fa-heart-o text-white"></i> Follow
            </span>
            <a href="/Watching" className=" flex gap-2">
              <span className="text-white bg_slate font-bold p-4 rounded-l-lg">
                Watch Now
              </span>
              <i className="fa fa-angle-right bg_slate text-white p-[18px] rounded-r-lg"></i>
            </a>
          </div>
        </div>
      </figure>
      <button
        onClick={handleNext}
        className=" text-slate-400 bg_btn_navigation rounded-md p-2 absolute top-1/2 z-10 -right-5 h-16 w-16"
      >
        <i className="fa-solid fa-arrow-right text-white text-xl -rotate-45"></i>
      </button>
    </main>
  );
};

export default Carrusel;
