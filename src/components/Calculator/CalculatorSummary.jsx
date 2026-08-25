export default function CalculatorSummary({ costs = [], fuels= [] }) {

    return (
        <div>
            <p>Résumé des dépences</p>
            <ul>
                <li>
                    Divers
                    <ul>
                        <li>Exemple 1 : 42.00 €</li>
                        <li>Exemple 2 : 100.00 €</li>
                    </ul>
                </li>
                <li>
                    Transport
                    <ul>
                        <li>500km : 51,98 €</li>
                    </ul>
                </li>
            </ul>
            <p>Total des dépences 193.98 €</p>
        </div>
    )
}

/* 
## Objectif de l'exercice : 
- Réaliser le composant "CalculatorSummary"
- Afficher la liste des frais et des carburants
- Afficher la somme total

## Information complémentaire pour le carburant : 

### Consommation pour le type de conduite 
- Eco     : 3.5L / 100km
- Confort : 4.5L / 100km
- Sport   : 10L  / 100km

### Prix du carburant
- Essence : 2,1340 €/l
- Diesel : 2,3150 €/l

### Cas pour l'electrique
Calcul non supporté → 0 de frais
*/