import { Suspense, use } from 'react';

export default function Weather({ coord }) {

    const apiKey = import.meta.env.VITE_WEATHER_KEY;

    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&lang=fr&appid=${apiKey}`).then(r => r.json());

    return (
        <div>
            <Suspense fallback={<p>Ssssa charge...</p>}>
                <WeatherInner promise={promise} />
            </Suspense>
        </div>
    )
}

function WeatherInner({ promise }) {
    const data = use(promise);
    const temp = data.main.temp;

    return (
        <p>La temperature est : {temp.toLocaleString('fr-be', { style: 'unit', unit: 'celsius'})}</p>
    )
}