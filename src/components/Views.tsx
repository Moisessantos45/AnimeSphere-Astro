import { useEffect, useState } from "react";
import "../Css/aside.css";
import axios from "axios";
import type { Anime } from "../Types/typeMoe";

const Views = () => {
  const [cardsData, setCardsData] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllAnimes = async () => {
      try {
        const response = await axios("https://api.jikan.moe/v4/top/anime");
        const data = response.data ? response.data.data : [];
        const newDataOmitMedia: Anime[] = data;
        // const newDataOmitMedia: Anime[] = data.map(
        //   ({
        //     airingAt,
        //     episode,
        //     media,
        //   }: {
        //     airingAt: number;
        //     episode: number;
        //     media: any;
        //   }) => ({ airingAt, episode, ...media })
        // );

        const newData = newDataOmitMedia.slice(0, 5);
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
        <h1 className="text-white font-bold text-2xl capitalize">TOP VIEWS</h1>
      </div>
      <article className=" w-full flex items-center flex-col">
        {cardsData.length > 1 &&
          cardsData.map((card) => (
            <figure
              className="relative flex justify-center items-center w-full p-1 card_item rounded-md"
              key={card.mal_id}
            >
              <span className="absolute top-2 left-2 card_text_epi text-sm rounded-md min-w-14 flex justify-center items-center z-10">
                {card.episodes || "?"}
              </span>
              <span className="absolute top-2 right-3 flex justify-center items-center text-white rounded-md text-sm min-w-14 bg_tangs_image z-10">
                {card.popularity || "?"}
              </span>
              <img
                src={
                  card.images.webp.large_image_url ||
                  card.images.jpg.large_image_url
                }
                alt={card.title_english || card.title_japanese || card.title}
                className="w-full flex h-52 self-center rounded-lg text-white"
              />
              <span className=" absolute bottom-2 left-2 z-10 font-bold">
                Top 58 Best Anime Waifus Of All Time [Cute Waifus List]
              </span>
            </figure>
          ))}
      </article>
    </>
  );
};

export default Views;
