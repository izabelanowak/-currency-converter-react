import { useState } from "react";
import "./style.css";

const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [hideResult, setHideResult] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState("Euro");
    const [result, setResult] = useState({
        value: 0,
        currency: "waluty",
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currency = currencies.find(({ name }) => name === selectedCurrency);
        const result = calculateResult(amount, currency.exchangeRate);
        setResult({ value: result, currency: currency.id });
    };

    const calculateResult = (amount, rate) => {
        return amount / rate;
    };
    const showResult = () => {
        setHideResult(hideResult => false);
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Kwota w złotych - PLN*:</span>
                        <input className="form__input" type="number" min="0" max="1000000000" step="0.01"
                            required value={amount} onChange={({ target }) => setAmount(target.value)} />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Waluta:</span>
                        {<select className="form__select" value={selectedCurrency} onChange={({ target }) => setSelectedCurrency(target.value)}>
                            {currencies.map(currency => (
                                <option key={currency.id}>
                                    {currency.name}
                                </option>)
                            )}
                        </select>}
                    </label>
                </p>
                <p className={`form__result${hideResult ? " form__result--hidden" : ""}`}>
                    {`Otrzymasz:`} <strong>{result.value.toFixed(2)}</strong> {result.currency}
                </p>
            </fieldset>
            <button type="submit" className="form__button" onClick={showResult}>Przelicz!</button>
        </form>
    )
};

export default Form;