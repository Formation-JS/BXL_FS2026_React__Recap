import { useState } from 'react';
import DestinationList from '../../components/Destination/DestinationList';
import destinations from './../../data/destinations.json';
import DestinationInfo from '../../components/Destination/DestinationInfo';

export default function DestinationPage() {

    const [destinationSelected, setDestinationSelected] = useState(null);

    const handleSelectDest = (destId) => {
        // Sauvegarde dans le state dans la destination selectionné
        setDestinationSelected(destinations.find(d => d.id === destId));
    }

    return (
        <section>
            <h2 id='calc'>Destination</h2>
            <p>Voici les différentes destination de voyage possible</p>
            <DestinationList destinations={destinations} onSelectDest={handleSelectDest} />
            {destinationSelected && (
                <DestinationInfo destination={destinationSelected} />
            )}
        </section>
    );
};