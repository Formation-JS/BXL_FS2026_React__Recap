import annapurna from './Annapurna.webp';
import style from './Home.module.css'

export default function HomePage() {

    return (
        <section className={style['home']}>
            <h2 id='home'>Accueil</h2>
            <img src={annapurna} alt='Annapurna' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem tempore, ipsam et maiores ratione temporibus, porro rem, itaque excepturi in voluptas. Quam placeat exercitationem facilis saepe cupiditate pariatur libero!</p>
        </section>
    );
};