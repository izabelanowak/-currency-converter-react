import "./style.css";
import { useState } from "react";
import Clock from "./Clock";
import FormField from "./FormField";
import Result from "./Result";

const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
    const [result, setResult] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currency = currencies.find(({ id }) => id === selectedCurrency);
        const result = calculateResult(amount, currency.exchangeRate);
        setResult({ value: result, currency: currency.id });
    };

    const calculateResult = (amount, rate) => {
        return amount / rate;
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <Clock />
                <FormField label="Kwota w złotych - PLN*:">
                    <input
                        className="form__input"
                        type="number"
                        min="0.01"
                        max="1000000000"
                        step="0.01"
                        required
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </FormField>
                <FormField label="Waluta:">
                    <select
                        className="form__select"
                        value={selectedCurrency}
                        onChange={({ target }) => setSelectedCurrency(target.value)}
                    >
                        {currencies.map(currency => (
                            <option key={currency.id} value={currency.id}>
                                {currency.name} - {currency.id}
                            </option>)
                        )}
                    </select>
                </FormField>
                <Result result={result} />
            </fieldset>
            <button type="submit" className="form__button">Przelicz!</button>
        </form>
    )
};

export default Form;