import DestinationList from '../../components/Destination/DestinationList';
import destinations from './../../data/destinations.json';

export default function DestinationPage() {

    return (
        <section>
            <h2 id='calc'>Destination</h2>
            <p>Voici les différentes destination de voyage possible</p>
            <DestinationList destinations={destinations} />
        </section>
    );
};