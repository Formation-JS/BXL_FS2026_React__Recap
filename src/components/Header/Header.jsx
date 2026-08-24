import style from './Header.module.css';

export default function Header() {

    return (
        <header className={style['header']}>
            <h1>Voyage voyage 💃</h1>
            <nav>
                <ul className={style['header-nav']}>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#calc">Calculateur</a></li>
                    <li><a href="#dest">Destination</a></li>
                </ul>
            </nav>
        </header>
    )
}