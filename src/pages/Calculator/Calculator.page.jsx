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

    const handleNewFuel = ({ distance, carburant, conduite }) => {
        // ↑ Le parametre "data" est destructuré pour utilisé directement les valeurs de l'objet

        // Calcul du prix
        let price;
        let message = null;

        if (carburant !== 'electrique') {
            // let conso;
            // switch (conduite) {
            //     case 'eco':
            //         conso = 3.5;
            //         break;
            //     case 'confort':
            //         conso = 4.5;
            //         break;
            //     default:
            //         conso = 10;
            //         break;
            // }
            const conso = (conduite === 'eco') ? 3.5
                : (conduite === 'confort') ? 4.5
                : 10;

            const carbuPrice = (carburant === 'essence') ? 2.1340 : 2.3150;
            price = (distance / 100) * conso * carbuPrice;
        }
        else {
            price = 0;
            message = '(Calcul pour les éléctriques non supporté)';
        }

        // L'ajout dans la liste avec le prix pré-calculé
        const fuel = {
            id: nanoid(),
            distance,
            price,
            message
        };
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