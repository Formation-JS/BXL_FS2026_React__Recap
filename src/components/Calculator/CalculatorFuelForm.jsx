import { useActionState } from 'react';

export default function CalculatorFuelForm() {

    const handleFuelSubmit = async (prevState, formData) => {

        const distance = parseFloat(formData.get('distance'));
        const conduite = formData.get('conduite');
        const carburant = formData.get('carburant');

        if (isNaN(distance) || distance <= 0 || !conduite || !carburant) {

            return {
                count: prevState.count + 1,
                error: prevState.count < 2 ? 'Valeur invalide' : 'Vas y, fais un effort !',
                data: {
                    distance: isNaN(distance) ? '' : distance, 
                    conduite, 
                    carburant
                },
                fix: new Date()
            };
        }

        return {
            error: null,
            data: null,
            count: 0,
            fix: new Date()
        };

    };

    //! Création d'un state liée au submit du formulaire
    const [state, onSubmit] = useActionState(handleFuelSubmit, { data: null, error: null, count: 0, fix: new Date() });
    
    //! Rendu
    return (
        <>
            <p>Type de conduite : </p>
            <form action={onSubmit}>
                <div>
                    <label htmlFor="input-distance">Distance parcourus : </label>
                    <input id='input-distance' name='distance' type="number"
                        defaultValue={state.data?.distance} />
                </div>

                <div>
                    <label htmlFor="input-drive-style">Type de conduite (Eco / Confort / Sport) : </label>
                    <select name="conduite" id="input-drive-style" defaultValue={state.data?.conduite} key={state.fix + '-1'}>
                        <option value="" hidden>-- Selection du type de conduite --</option>
                        <option value="eco">Eco</option>
                        <option value="confort">Confort</option>
                        <option value="sport">Sport</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="input-fuel">Type de carburant (Diesel / Essence, Electrique) : </label>
                    <select name="carburant" id="input-fuel" defaultValue={state.data?.carburant} key={state.fix + '-2'}>
                        <option value="" hidden>-- Selection du type de carburant --</option>
                        <option value="diesel">Diesel</option>
                        <option value="essence">Essence</option>
                        <option value="electrique">Electrique</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Ajouter</button>
                    {state.error && (
                        <span>{state.error}</span>
                    )}
                </div>
            </form>
        </>
    );
}