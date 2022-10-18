export const Header = () =>{
    return(
        <div className="card-header p-5 mb-5" style={{ border: '0ch', borderRadius: 20, backgroundImage: 'url(./assets/images/movies.jpg)', backgroundSize: '100% 100%', color: 'white', backgroundColor: 'red' }}>
        <h1 className="display-4">cinemateca</h1>
        <p className="lead">Quem manda na minha terra sou euzis!Em pé sem cair, deitado sem dormir, sentado sem
            cochilar e fazendo pose</p>
        <hr className="my-4" />
        <p>Nullam volutpat risus nec leo commodo, ut interdum diam laoreet</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">sobre nós</a>
        </p>
    </div>
    )
}