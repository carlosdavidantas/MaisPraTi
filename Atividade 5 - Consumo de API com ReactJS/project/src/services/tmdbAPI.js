const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

function fetchMethod(url, options) {
    return fetch(url, options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => {
            console.error(err);
            return null;
        });
}

export function getMovies(queryStringValue, page = 1) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${queryStringValue}&include_adult=false&language=pt-BR&page=${page}`;
    return fetchMethod(url, options);
}

export function getCredits(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`;
    return fetchMethod(url, options);
}