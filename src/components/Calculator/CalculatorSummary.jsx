export default function CalculatorSummary({ costs = [], fuels = [] }) {

    //! Conversion des éléments de liste en élément affichable pour React
    const displayCosts = costs.map(elem => (
        <li key={elem.id}>
            {elem.source} : {elem.cost.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}
        </li>
    ));

    const displayFuels = fuels.map(elem => (
        <CalculatorSummaryFuelLine {...elem} key={elem.id} />
    ));

    //! Calcul du prix total (divers et trajet)
    //v1) Calcul avec des boucles
    /*
    let totalPrice = -0;
    for(const elem of costs) {
        totalPrice += elem.cost;
    } 
    for(const elem of fuels) {
        totalPrice += elem.price;
    }
    */

    //v2) Utilisation de la méthode sumPrecise (Nouveauté 2026 :o)
    let totalPrice = Math.sumPrecise(costs.map(elem => elem.cost));
    totalPrice += Math.sumPrecise(fuels.map(elem => elem.price));


    return (
        <div>
            <p>Résumé des dépences</p>
            <ul>
                <li>
                    Divers
                    <ul>{displayCosts}</ul>
                </li>
                <li>
                    Trajet
                    <ul>{displayFuels}</ul>
                </li>
            </ul>
            <p>Total des dépences {totalPrice.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' })}</p>
        </div>
    );
}

function CalculatorSummaryFuelLine({ distance, price, message }) {

    return (
        <li>
            {distance}km : {price.toLocaleString('fr-be', { style: 'currency', currency: 'EUR'})} {message}
        </li>
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