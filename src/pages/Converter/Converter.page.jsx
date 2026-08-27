import ConvertForm from '../../components/Converter/ConverterForm';

export default function ConverterPage () {

    // TODO replace by request data
    const change = {
        "CAD": 1.617207549,
        "CHF": 0.9383158489,
        "CNY": 7.8355179525,
        "EUR": 1,
        "GBP": 0.8572007508,
        "JPY": 185.6084290813,
        "MXN": 19.7505638297,
        "RUB": 98.3630796548,
        "USD": 1.1654792182
    };

    return (
        <section>
            <h2>Conversion de devise</h2>
            <ConvertForm change={change} />
        </section>
    )
}