const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
};

export function getMovies(queryStringValue) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${queryStringValue}&include_adult=false&language=pt-BR&page=1`;
    return fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
}
