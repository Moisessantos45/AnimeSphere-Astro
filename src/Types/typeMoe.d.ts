//api de anime api.jikan.moe
interface Imagen {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
  medium_image_url?: string;
  maximum_image_url?: string;
}

interface Video {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Imagen;
}

interface Titulo {
  type: string;
  title: string;
}

interface AiredDate {
  from: string;
  to: string;
  prop: {
    from: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
  };
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

//animes en general

interface Anime {
  mal_id: number;
  url: string;
  images: { jpg: Imagen; webp: Imagen };
  trailer: Video;
  approved: boolean;
  titles: Titulo[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredDate;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Genre[];
  explicit_genres: any[]; // Tipo indefinido, parece que debería ser una lista de géneros explícitos
  themes: Theme[];
  demographics: Demographic[];
}

interface TypeGneres {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export type { Anime,TypeGneres };
