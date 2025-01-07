interface Movie {
  id: string;
  title: string;
  genres: string[];
  releaseDate: string;
  rating: {
    avg: number;
    count: number;
  };
}

export const movies: Movie[] = [
  {
    id: "tt1375666",
    title: "Inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
    releaseDate: "2010-07-16",
    rating: {
      avg: 4.5,
      count: 20,
    },
  },
  {
    id: "tt0816692",
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    releaseDate: "2014-11-07",
    rating: {
      avg: 4.7,
      count: 35,
    },
  },
  {
    id: "tt0133093",
    title: "The Matrix",
    genres: ["Action", "Sci-Fi"],
    releaseDate: "1999-03-31",
    rating: {
      avg: 4.8,
      count: 50,
    },
  },
  {
    id: "tt0111161",
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    releaseDate: "1994-09-22",
    rating: {
      avg: 4.9,
      count: 100,
    },
  },
  {
    id: "tt0468569",
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    releaseDate: "2008-07-18",
    rating: {
      avg: 4.9,
      count: 200,
    },
  },
  {
    id: "tt0137523",
    title: "Fight Club",
    genres: ["Drama"],
    releaseDate: "1999-10-15",
    rating: {
      avg: 4.8,
      count: 120,
    },
  },
  {
    id: "tt6751668",
    title: "Parasite",
    genres: ["Drama", "Thriller"],
    releaseDate: "2019-05-30",
    rating: {
      avg: 4.6,
      count: 250,
    },
  },
  {
    id: "tt0848228",
    title: "The Avengers",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "2012-05-04",
    rating: {
      avg: 4.3,
      count: 300,
    },
  },
  {
    id: "tt0499549",
    title: "Avatar",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "2009-12-18",
    rating: {
      avg: 4.4,
      count: 400,
    },
  },
  {
    id: "tt0109830",
    title: "Forrest Gump",
    genres: ["Drama", "Romance"],
    releaseDate: "1994-07-06",
    rating: {
      avg: 4.8,
      count: 350,
    },
  },
  {
    id: "tt0181689",
    title: "The Mummy",
    genres: ["Action", "Adventure", "Fantasy"],
    releaseDate: "1999-05-07",
    rating: {
      avg: 4.1,
      count: 220,
    },
  },
  {
    id: "tt0118799",
    title: "Saving Private Ryan",
    genres: ["Drama", "War"],
    releaseDate: "1998-07-24",
    rating: {
      avg: 4.7,
      count: 150,
    },
  },
  {
    id: "tt0134684",
    title: "American History X",
    genres: ["Drama"],
    releaseDate: "1998-10-30",
    rating: {
      avg: 4.7,
      count: 180,
    },
  },
  {
    id: "tt0114369",
    title: "The Silence of the Lambs",
    genres: ["Crime", "Drama", "Thriller"],
    releaseDate: "1991-02-14",
    rating: {
      avg: 4.8,
      count: 200,
    },
  },
  {
    id: "tt0102926",
    title: "Terminator 2: Judgment Day",
    genres: ["Action", "Sci-Fi", "Thriller"],
    releaseDate: "1991-07-03",
    rating: {
      avg: 4.7,
      count: 280,
    },
  },
  {
    id: "tt0458339",
    title: "The Dark Knight Rises",
    genres: ["Action", "Crime", "Drama"],
    releaseDate: "2012-07-20",
    rating: {
      avg: 4.5,
      count: 230,
    },
  },
  {
    id: "tt0076759",
    title: "Star Wars: Episode IV - A New Hope",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "1977-05-25",
    rating: {
      avg: 0.5,
      count: 322,
    },
  },
];
