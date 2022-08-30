import { Header } from "../../components/Header";
import { MovieSection } from "../../components/MoviesSection";
import './style.scss'

export function Home(){
    return (
        <div className="container-home-page">
            <Header/>
            <section className="search-content">
                <div className="content">
                    <h1>Bem-Vindo(a).</h1>
                    <h2>milhões de filmes, séries e pessoas para descobrir. eplore já</h2>

                    <div className="search-box">
                    <input type="text" placeholder="Buscar por um Filmes, Séries ou Pessoa..."/>
                    <button id="search-button">Search</button>
                    </div>
                </div>
            </section>
            <div className="movie-section-home">
                <MovieSection/>
            </div>
        </div>
    )
}