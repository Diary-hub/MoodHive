const mediaType = {
  movies: "moodhive/movies",
  music: "moodhive/music"
};

const mediaCategory = {
  popular: "popular",

};

const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original/${imgEndpoint}`;

const posterPath = (imgEndpoint) => `${imgEndpoint}`;

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath
};

export default tmdbConfigs;