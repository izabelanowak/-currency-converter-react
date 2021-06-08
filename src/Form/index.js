import "./style.css";

const Form = (props) => (
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
                    <select className="form__select" name="currency">
                        <option value="EUR">Euro - EUR</option>
                        <option value="GBP">Funt brytyjski - GBP</option>
                        <option value="USD">Dolar amerykański - USD</option>
                        <option value="CHF">Frank szwajcarski - CHF</option>
                    </select>
                </label>
            </p>
            <p className="form__result">
                Otrzymasz: <strong>N/A</strong><span> waluty</span>
            </p>
        </fieldset>
        <p>
            <button type="submit" className="form__button">Przelicz!</button>
        </p>
    </form>
);

export default Form;