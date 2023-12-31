const mediaType = {
    movie: 'movie',
    tv: 'tv',
};

const mediaCategory = {
    popular: 'popular',
    top_rated: 'top_rated',
};

const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;
const thumbnailYtb = (thumbnailKey) => `https://img.youtube.com/vi/${thumbnailKey}/hqdefault.jpg`;

const tmdbConfigs = {
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath,
    thumbnailYtb,
};

export default tmdbConfigs;
