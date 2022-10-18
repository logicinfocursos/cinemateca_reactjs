export const Nav = () => {
    return (
        <div className="row mb-5">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">cinemateca</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.themoviedb.org/" target="_blank">site TMDB</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sobre nós</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}