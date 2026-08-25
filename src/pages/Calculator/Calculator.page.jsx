import { useState } from 'react';
import CalculatorCostForm from '../../components/Calculator/CalculatorCostForm';
import CalculatorFuelForm from '../../components/Calculator/CalculatorFuelForm';
import { nanoid } from 'nanoid';
import CalculatorSummary from '../../components/Calculator/CalculatorSummary';

export default function CalculatorPage() {

    const [costData, setCostData] = useState([]);
    const [fuelData, setFuelData] = useState([]);

    const handleNewCost = (data) => {
        // Création d'un objet avec les données (data) et l'id généré
        const cost = { id: nanoid(), ...data };
        // Modification du state pour ajouter les nouvelles données
        setCostData(prevCostData => [...prevCostData, cost]);
    };
    
    const handleNewFuel = (data) => {
        const fuel = { id: nanoid(), ...data };
        setFuelData(prevFuelData => [...prevFuelData, fuel]);
    };

    return (
        <section>
            <h2 id='calc'>Calculateur</h2>
            <p>Ce calculateur vous permet de simulez vos dépences en calculant les frais de transport, d'hotel et divers</p>

            <CalculatorCostForm onNewCostSubmit={handleNewCost} />
            <CalculatorFuelForm onNewFuelSubmit={handleNewFuel} />
            <CalculatorSummary costs={costData} fuels={fuelData} />
            {/* ↑ BONUS : Ajouter des events "onRemove..." pour supprimer des données */}
        </section>
    );
};