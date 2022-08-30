import './style.scss'
import logoImg from  '../../assets/logo.svg'
import plusImg from '../../assets/plus.svg'
import searchImg from '../../assets/search.svg'

export function Header (){
    return (
        <header className='header'>
            <div className="list">
                <img src={logoImg} alt="" className='logo' />
                <ul>
                    <li>Filmes</li>
                    <li>Séries</li>
                    <li>Pessoas</li>
                    <li>Mais</li>
                </ul>
            </div>
            <div className='options'>
                <img src={plusImg} alt="" className='plus'/>
                <div className='language'>
                    <p>PT</p>
                </div>
                <p>Entrar</p>
                <p>Junte-se ao TMDB</p>
                <img src={searchImg} alt="" className='search' />
            </div>
        </header>
    )
}