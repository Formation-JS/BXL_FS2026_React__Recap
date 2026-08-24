import { useActionState } from 'react';

export default function CalculatorCostForm() {

    //! Traitement du submit du formulaire
    const handleCostSubmit = async (_prevState, formData) => {
        // Lecture des données du formulaire
        const source = formData.get('source');
        const cost = parseFloat(formData.get('cost'));

        // Si les données du formulaire sont foireuse
        if(source.trim() === '' || isNaN(cost)) {
            // Renvoi le state pour l'erreur
            return {
                error: 'Valeur invalide',
                data: { 
                    source,
                    cost: isNaN(cost) ? '' : cost
                }
            }
        }

        // TODO Envoyer un event au composant parent

        // Renvoi le state quand le formulaire a été validé
        return {
            error: null,
            data: null
        };
    };

    //! Création d'un state liée au submit du formulaire
    const [state, onSubmit] = useActionState(handleCostSubmit, { data: null, error : null });

    //! Rendu
    return (
        <>
            <p>Ajouter des frais : </p>
            <form action={onSubmit}>
                <div>
                    <label htmlFor="input-source">Source : </label>
                    <input id='input-source' name='source' type="text"
                        defaultValue={state.data?.source} />
                </div>
                <div>
                    <label htmlFor="input-cost">Cout : </label>
                    <input id='input-cost' name='cost' type="number" 
                        step={0.01} defaultValue={state.data?.cost} />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                    { state.error && (
                        <span>{state.error}</span>
                    )}
                </div>
            </form>
        </>
    );
}