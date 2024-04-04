import axios from "axios";
import type { TypeGneres,Anime } from "../Types/typeMoe";

const getAllGenres = async (): Promise<TypeGneres[]> => {
  try {
    const res = await axios("https://api.jikan.moe/v4/genres/anime");
    return res.data.data;
  } catch (error) {
    throw new Error("Error al obtener los datos");
  }
};

const getAllAnimesGenres = async (mal_id: number): Promise<Anime[]> => {
  try {
    const res = await axios(
      `https://api.jikan.moe/v4/anime?genres=${mal_id}&start_date=2024-01-01`
    );
    return res.data.data;
  } catch (error) {
    throw new Error("Error al obtener los datos");
  }
};

export { getAllGenres,getAllAnimesGenres };
