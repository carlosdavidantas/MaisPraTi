import { deleteFilmOnLocalStorage } from "../../utils/localstorageHandler.js";
import { MdOutlineDelete } from "react-icons/md";
import "./filmFavoriteItem.css";

function FilmFavoriteItem({ data, userQuerySearchResults, updateFavorites, updateSeachResults, setIsCompleteFilmInfoModal, setCompleteFilmData }) {
    return (
        <div className="favorite-item-background">
            <section className="favorite-poster-background">
                <img className="favorite-poster" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.title} />
            </section>

            <section className="favorite-infos-background">
                <div className="title-and-delete-button-background">
                    <p className="favorite-title">{data.title}</p>
                    <button
                        className="favorite-delete-button"
                        onClick={() => {
                            if (userQuerySearchResults.length == 0) {
                                deleteFilmOnLocalStorage(data.id);
                                updateFavorites();
                                return;
                            }

                            const newResults = [...userQuerySearchResults];
                            newResults.forEach(movie => {
                                if (movie.id == data.id) {
                                    movie.isFavorite = false;
                                    deleteFilmOnLocalStorage(data.id);
                                    updateFavorites();
                                    updateSeachResults(newResults);
                                }
                            });

                            deleteFilmOnLocalStorage(data.id);
                            updateFavorites();
                        }}
                    >
                        <MdOutlineDelete className="favorite-delete-icon" />
                    </button>
                </div>


                <p className="favorite-year">Ano: {data.release_date?.slice(0, 4)}</p>

                <button 
                    className="visualize-film-button"
                    onClick={() => {
                        console.log("executed");
                        setIsCompleteFilmInfoModal(true);
                        setCompleteFilmData(data);
                    }}
                >
                    Visualizar
                </button>
            </section>

        </div>
    );
}

export default FilmFavoriteItem;