import "./personRole.css";

function PersonRole({ role, poster, name }) {
    return (
        <section className="person-role-background">
            <p className="person-role-title">{role}</p>
            <div className="person-role-img-background">
                <img className="person-role-img" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name}/>
            </div>
            <p className="person-role-name">{name}</p>
        </section>
    );
}

export default PersonRole;