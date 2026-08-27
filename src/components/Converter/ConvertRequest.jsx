import { Suspense, use } from 'react';
import ConvertForm from './ConverterForm';

export default function ConverterRequest() {

    const apiKey = import.meta.env.VITE_CURRENCY_KEY;

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=CAD%2CCHF%2CCNY%2CEUR%2CGBP%2CJPY%2CMXN%2CRUB%2CUSD`;

    const promise = fetch(url).then(res => res.json());

    return (
        <Suspense fallback={<ConverterLoading />}>
            <ConverterInner promise={promise} />
        </Suspense>
    );
}

function ConverterLoading() {
    return (
        <p>Chargement en cours...</p>
    );
}

function ConverterInner({ promise }) {
    const { data } = use(promise);

    return (
        <ConvertForm change={data} />
    );
}