import Weather from '../Weather/Weather';

export default function DestinationInfo({ destination }) {

    return (
        <section>
            <h3>Information de la destination</h3>
            <p>Détail pour {destination.name}</p>
            <Weather coord={destination.coord} />
        </section>
    )
}