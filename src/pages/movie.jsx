import { useState, useEffect } from 'react'

import { useParams } from 'react-router'
import { apiGET } from '../services'



export default function Movie() {

    const { code } = useParams()
    const [movie, setMovie] = useState(null)

    const fetchdata = async () => {

        const result = await apiGET({code})


        setMovie(result)

    }

    useEffect(() => {
        fetchdata()
    }, [])

    if (!movie) return <h1>carregando...</h1>

    const image = `${process.env.REACT_APP_API_IMG_PATH}/${movie.poster_path}`

    return (
        <section class="container">

            <div class="row gx-4 gx-lg-5 align-items-center">

                {
                    movie
                        ? <>
                            <div class="col-md-6">

                                <div id="movie_poster">
                                    <img class="card-img-top mb-5 mb-md-0" src={image}
                                        alt="capa do filme" />
                                </div>

                                <a href="/" class="btn btn-primary mt-5 mb-5">retornar</a>

                            </div>

                            <div class="col-md-6" id="movieDetails">
                                <div class="small mb-1">
                                    fonte: <a href={`${process.env.REACT_APP_URL_TMDB}/${movie.id}`} target="_blank">TMDB</a>
                                </div>

                                <h1 class="">{movie.title}</h1>
                                <h6 class="mb-5">{movie.original_title}</h6>

                                <p class="lead">{movie.overview}</p>

                                <a href={`${process.env.REACT_APP_URL_TMDB}/${movie.id}`} class="btn btn-outline-dark" target="_blank">ver no TMDB </a>

                            </div>
                        </>
                        : <h1>carregando...</h1>
                }
            </div>
        </section>
    )
}