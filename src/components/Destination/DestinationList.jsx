import { useState } from 'react';
import style from './Destination.module.css';

export default function DestinationList({ destinations = [], onSelectDest = () => {} }) {

    // Dans DestinationList "onSelectDest" permet de transmettre l'event de DestinationListItem
    // Ce composant l'intéragi pas avec l'event, il ne fait que transmettre (Passe plat)

    return (
        <section>
            <h3>Listing des destinations</h3>
            <div  className={style['dest-list']}>
                {destinations.map(destination => (
                    <DestinationListItem
                    key={destination.id}
                    onSelectDest={onSelectDest}
                    {...destination}
                    />
                ))}
            </div>
        </section>
    );
}

function DestinationListItem({ id, name, country, desc, shortDesc, price, tags, activities, coord, onSelectDest }) {

    const handleSelectDest = () => {
        onSelectDest(id);
    };

    return (
        <article className={style['dest-item']}>
            <p>{name} <span className={style['country']}>({country})</span></p>
            <DestinationDescription desc={desc} shortDesc={shortDesc} />
            <p>Prix du voyage : {price.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</p>
            <p>Tags : {tags.map(tag => <span className={style['tag']} key={tag}>{tag}</span>)}</p>
            <DestinationActivities activities={activities} />
            <button onClick={handleSelectDest}>
                Selectionner la destination
            </button>
        </article>
    );
}

function DestinationDescription({ desc, shortDesc }) {
    const [isFullDescVisible, setFullDescVisible] = useState(!shortDesc);

    const handleVisibility = () => {
        setFullDescVisible(true);
    };

    return (
        <p onClick={handleVisibility}>Description : {isFullDescVisible ? desc : shortDesc}</p>
    );
}


function DestinationActivities({ activities = [] }) {
    return (
        <>
            <p>Activités possibles : </p>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.name} : {activity.duration.toLocaleString('fr-be', { style: 'unit', unit: 'minute' })}
                    </li>
                ))}
            </ul>
        </>
    );
}