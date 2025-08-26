import "./filmItem.css";

function FilmItem({title, year, poster}) {
    return (
        <div className="film-item-background">
            <img className="poster" src={poster} alt={title}/>
            <section className="info-background">
                <p className="title">{title}</p>
                <p className="year">{year}</p>
                <section className="button-background">
                    <button className="button">Visualizar detalhes</button>
                </section>
            </section>
        </div>
    );
}

export default FilmItem;