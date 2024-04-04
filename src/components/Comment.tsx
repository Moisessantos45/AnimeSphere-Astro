import { useEffect, useState } from "react";
import "../Css/aside.css";
import axios from "axios";
import type { AnimeReview } from "../Types/typeReviews";

const Comment = () => {
  const [cardsData, setCardsData] = useState<AnimeReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const views = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  useEffect(() => {
    const getAllAnimes = async () => {
      try {
        const response = await axios("https://api.jikan.moe/v4/top/reviews");
        const data: AnimeReview[] = response.data ? response.data.data : [];
        const newData: AnimeReview[] = data.slice(0, 4);
        setCardsData(newData);
      } catch (error) {
        setCardsData([]);
      }
      setLoading(false);
    };
    getAllAnimes();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="w-11/12 flex items-center gap-2 p-2 border_color_left">
        <h1 className="text-white font-bold text-2xl capitalize">
          NEW COMMENT
        </h1>
      </div>
      <article className=" w-full flex flex-col items-center">
        {cardsData.length > 1 &&
          cardsData.map((card) => (
            <figure
              className=" flex justify-between items-center w-full p-1 rounded-md"
              key={card.mal_id}
            >
              <img
                src={
                  card.entry.images.jpg.image_url ||
                  card.entry.images.webp.image_url
                }
                alt={card.entry.title || ""}
                className="w-full h-52 md:w-1/2 self-center"
              />
              <div className=" flex flex-col justify-evenly items-starts h-full p-2 md:w-1/2">
                <div className=" w-full flex justify-evenly">
                  <span className=" bg_tangs_image text-xs rounded-md w-14 flex justify-center items-center">
                    {card.type}
                  </span>
                  <span className=" flex justify-center items-center text-white rounded-md text-xs min-w-14 bg_tangs_image p-[2px]">
                    {card.tags[0]}
                  </span>
                </div>
                <a href={`/animeDetails/${card.entry.mal_id}`}>
                  <span className="font-bold">
                    {card.entry.title || "Title not found"}
                  </span>
                </a>
                <span className=" flex justify-center items-center text-white rounded-md text-sm text-start">
                  {card.score ? `${card.score} Viewes` : views + " Views"}
                </span>
              </div>
            </figure>
          ))}
      </article>
    </>
  );
};

export default Comment;
