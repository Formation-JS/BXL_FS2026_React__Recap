import CalculatorCostForm from '../../components/Calculator/CalculatorCostForm';

export default function CalculatorPage() {

    return (
        <section>
            <h2 id='calc'>Calculateur</h2>
            <p>Ce calculateur vous permet de simulez vos dépences en calculant les frais de transport, d'hotel et divers</p>
            {/* TODO : Faire le composant... */}

            <CalculatorCostForm />

        </section>
    );
};