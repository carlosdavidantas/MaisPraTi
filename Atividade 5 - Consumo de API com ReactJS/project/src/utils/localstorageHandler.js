const localStorage = window.localStorage;
const filmsKey = "fav-films";

export function getJsonFilmsOnLocalStorage() {
    const localStorage = window.localStorage;
    return localStorage.getItem(filmsKey);
}

export function setFilmOnLocalStorage(filmData) {
    let storedData = getJsonFilmsOnLocalStorage();
    let films = storedData ? JSON.parse(storedData) : [];
    films.push(filmData);
    localStorage.setItem(filmsKey, JSON.stringify(films));
}

export function deleteFilmOnLocalStorage(filmId) {
    let storedData = getJsonFilmsOnLocalStorage();
    let films = storedData ? JSON.parse(storedData) : [];
    for(let i = 0; i < films.length; i++) {
        if(films[i].id == filmId) {
            films.splice(i, 1);
        }
    }
    localStorage.setItem(filmsKey, JSON.stringify(films)); 
}

export function deleteStorageItem(key) {
    localStorage.removeItem(key);
}