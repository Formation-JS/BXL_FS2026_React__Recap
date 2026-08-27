import { useActionState } from 'react';

export default function ConvertForm({ change = {} }) {

    const currenciesAvailable = Object.keys(change);

    const handleConvertAmount = async (prevState, formData) => {
        const amountSource = parseFloat(formData.get('amout'));             // 100.00
        const currencySource = formData.get('currency-source'); // CHF
        const currencyTarget = formData.get('currency-target'); // JPY

        const tauxSource = change[currencySource];
        const tauxTarget = change[currencyTarget];

        const amountTarget = (amountSource / tauxSource) * tauxTarget;

        return {
            msg: `Pour ${amountSource} en ${currencySource}, vous avez ${amountTarget} en ${currencyTarget}.`
        }
    };

    const [state, onSubmit] = useActionState(handleConvertAmount, { msg: 'Pas de conversion réalisé' });

    return (
        <>
            <form action={onSubmit}>
                <div>
                    <label htmlFor="input-amount">Montant : </label>
                    <input name='amout' id='input-amount' type="number" step={0.01} />
                </div>
                <div>
                    <label htmlFor="input-currency-1">Devise initial</label>
                    <select name="currency-source" id="input-currency-1">
                        {currenciesAvailable.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="input-currency-2">Devise cible</label>
                    <select name="currency-target" id="input-currency-2">
                        {currenciesAvailable.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                </div>
                <div>
                    <button>Convertir</button>
                </div>
            </form>
            <p>{state.msg}</p>
        </>
    );
}