import { useState } from 'react';

export default function DestinationList({ destinations = [] }) {

    return (
        <section>
            <h3>Listing des destinations</h3>
            {destinations.map(destination => (
                <DestinationListItem key={destination.id} {...destination} />
            ))}
        </section>
    );
}

function DestinationListItem({ id, name, country, desc, shortDesc, price, tags, activities, coord }) {

    return (
        <article className='dest'>
            <br />
            <p>{name} <span className='country'>({country})</span></p>
            <DestinationDescription desc={desc} shortDesc={shortDesc} />
            <p>Prix du voyage : {price.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</p>
            <p>Tags : {tags.map(tag => <span className='tag'>#{tag} </span>)}</p>
            <DestinationActivities activities={activities} />
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
                    <li>{activity.name} : {activity.duration.toLocaleString('fr-be', { style: 'unit', unit: 'minute' })}</li>
                ))}
            </ul>
        </>
    );
}