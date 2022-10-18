import { useState, useEffect } from 'react'
import { apiGET } from '../services'
import { Header } from '../components'



export default function Movies() {

    const [movies, setMovies] = useState(null)
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(process.env.REACT_APP_NUM_PAGES)


    const fetchdata = async (page) => {
       
        const result = await apiGET({page})

        setMovies(result)
    }



    useEffect(() => {

        fetchdata(15)

    }, [])



    return (

        <section className="container">

            <Header />

            <div className="btn-group mb-5" role="group" aria-label="Basic example ">
                <button type="button" className="btn btn-primary active" onClick={() => clicked('grid')} id="btn-grid">
                    <i className="bi bi-square-fill" />
                </button>
                <button type="button" className="btn btn-primary" onClick={() => clicked('list')} id="btn-list">
                    <i className="bi bi-square-half" />
                </button>
            </div>

            <h1>Top filmes mais populares no <a className="text-decoration-none text-reset" href={process.env.REACT_APP_SITE_TMDB} target="_blank">TMDB</a></h1>

            <Pagination
                fetchdata={fetchdata}
                setActualPage={setActualPage}
                actualPage={actualPage}
                totalPages={totalPages}
            />

            <div className="row" id="grid" style={{ display: 'block' }}>
                <div className="container">
                    <div className="row text-center text-lg-start" id="gridList">

                        {
                            movies

                                ? movies.map((item, key) => {
                                    return (
                                        <GridItem
                                            item={item}
                                            key={key}
                                        />
                                    )
                                })
                                : <h1>carrengando...</h1>
                        }

                    </div>
                </div>
            </div>


            <div className="row" id="list" style={{ display: 'none' }}>
                <div className="container">

                    {
                        movies

                            ? movies.map((item, key) => {
                                return (
                                    <ListItem
                                        item={item}
                                        key={key}
                                    />
                                )
                            })
                            : <h1>carrengando...</h1>
                    }

                </div>
            </div>
        </section>
    )
}


const GridItem = ({ item }) => {

    const image = `${process.env.REACT_APP_API_IMG_PATH}/${item.poster_path}`

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 gx-3 mb-3">
            <a href={`/${item.id}`} className="d-block mb-4 h-100 text-decoration-none text-reset">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="capa do filme" />
                    <div className="card-body">
                        <h5 className="card-title px-4 my-4">{item.title}</h5>
                        <p className="card-text px-4"><b>{item.original_title}</b></p>
                        <p className="card-text px-4">{item.release_date}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

const ListItem = ({ item }) => {

    const image = `${process.env.REACT_APP_API_IMG_PATH}/${item.poster_path}`

    return (
        <div className="card mb-3 px-3 py-3 col-12" style={{ borderRadius: 10 }}>
            <div className="card-header row">
                <picture className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <img src={image} className="img-fluid img-thumbnail" alt="capa do filme" style={{ maxHeight: 500 }} />
                </picture>
                <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                    <h1 className="mt-5">{item.title}</h1>
                    <p><b>{item.original_title}</b></p>
                    <p>{item.release_date}</p>
                    <p>{item.overview}</p>
                    <a className="btn btn-primary" href={`/${item.id}`}>ver os detalhes</a>
                </div>
            </div>
        </div>
    )
}



export const Pagination = ({ fetchdata, setActualPage, actualPage, totalPages }) => {

    const pages = []

    for (let p = 1; p <= totalPages; p++) {

        pages.push(p)

    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm justify-content-center mb-5 mt-5" id="pagination">
                {
                    pages.map((item, key) => {

                        return (
                            <li class={`page-item ${item == actualPage ? ' active' : ''}`} key={key}><button className="page-link" onClick={() => changePage(item, fetchdata, setActualPage)}>{item}</button></li>
                        )

                    })
                }

            </ul>
        </nav>
    )
}



export const changePage = (page, fetchdata, setActualPage) => {

    setActualPage(page)
    fetchdata(page)
}


export function clicked(option) {

    if (option == 'grid') {
        document.getElementById('grid').style.display = 'block'
        document.getElementById('list').style.display = 'none'

    } else if (option == 'list') {
        document.getElementById('grid').style.display = 'none'
        document.getElementById('list').style.display = 'block'
    }

    document.getElementById('btn-grid').classList.toggle("active")
    document.getElementById('btn-list').classList.toggle("active")
}
