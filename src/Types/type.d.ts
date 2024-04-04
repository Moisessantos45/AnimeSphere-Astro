interface Anime {
  id: number;
  title: {
    userPreferred: string;
    romaji: string;
    english: string;
    native: string;
  };
  genres: string[];
  description: string;
  format: "TV" | "OTHER_FORMATS";
  bannerImage: string;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  seasonYear: number;
  averageScore: number;
  // Properties specific to AiringEpisode
  airingAt?: number;
  episode?: number;
  idMal?: number;
  countryOfOrigin?: string;
  popularity?: number;
  // Properties specific to Anime
  episodes?: number;
  meanScore?: number;
  status?: "RELEASING" | "OTHER_STATUS";
  season?: "WINTER" | "SPRING" | "SUMMER" | "FALL";
}

export type { Anime };
