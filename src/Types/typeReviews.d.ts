interface Imagen {
  image_url: string;
  small_image_url: string;
  large_image_url?: string;
}

interface ReviewEntry {
  mal_id: number;
  url: string;
  images: { jpg: Imagen; webp: Imagen };
  title: string;
}

interface User {
  url: string;
  username: string;
  images: { jpg: Imagen; webp: Imagen };
}

interface Reaction {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
}

interface AnimeReview {
  mal_id: number;
  url: string;
  type: string;
  reactions: Reaction;
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: null;
  entry: ReviewEntry;
  user: User;
}

export type { AnimeReview };
