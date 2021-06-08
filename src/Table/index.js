import "./style.css";

const Table = (props) => (
    <table className="table">
        <caption className="table__caption">Aktualne kursy walut</caption>
        <tr className="table__row">
            <th className="table__cell table__cell--header" scope="col">Nazwa</th>
            <th className="table__cell table__cell--header" scope="col">Waluta</th>
            <th className="table__cell table__cell--header" scope="col">Kurs</th>
        </tr>
        <tr className="table__row">
            <th className="table__cell table__cell--header" scope="row">Euro</th>
            <td className="table__cell">EUR</td>
            <td className="table__cell">4.5654</td>
        </tr>
        <tr className="table__row">
            <th className="table__cell table__cell--header" scope="row">Funt brytyjski</th>
            <td className="table__cell">GBP</td>
            <td className="table__cell">5.2491</td>
        </tr>
        <tr className="table__row">
            <th className="table__cell table__cell--header" scope="row">Dolar amerykański</th>
            <td className="table__cell">USD</td>
            <td className="table__cell">3.7746</td>
        </tr>
        <tr className="table__row">
            <th className="table__cell table__cell--header" scope="row">Frank szwajcarski</th>
            <td className="table__cell">CHF</td>
            <td className="table__cell">4.1502</td>
        </tr>
    </table>
);

export default Table;


