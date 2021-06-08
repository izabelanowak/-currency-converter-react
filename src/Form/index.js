import "./style.css";

const Form = ({ currencies }) => {
    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Kwota w złotych - PLN*:</span>
                        <input className="form__input" type="number" min="0" max="1000000000" step="0.01"
                            required />
                    </label>
                </p>
                <p>
                    <label className="form__label">
                        <span className="form__labelText">Waluta:</span>
                        {<select className="form__select" name="currency">
                            {currencies.map(currency => (
                                <option key={currency.id}>
                                    {currency.name}
                                </option>)
                            )}
                        </select>}
                    </label>
                </p>
                <p className="form__result">
                    Otrzymasz: <strong>N/A</strong><span> waluty</span>
                </p>
            </fieldset>
            <button type="submit" className="form__button">Przelicz!</button>
        </form>
    )
};

export default Form;