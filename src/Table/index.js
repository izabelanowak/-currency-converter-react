import "./style.css";

const Table = ({ currencies }) => (
    <table className="table">
        <caption className="table__caption">Aktualne kursy walut</caption>
        <thead>
            <tr className="table__row">
                <th className="table__cell table__cell--header" scope="col">Nazwa</th>
                <th className="table__cell table__cell--header" scope="col">Waluta</th>
                <th className="table__cell table__cell--header" scope="col">Kurs</th>
            </tr>
        </thead>
        <tbody>
            {currencies.map(currency => (
                <tr className="table__row">
                    <th className="table__cell table__cell--header" scope="row">
                        {currency.name}
                    </th>
                    <td className="table__cell">
                        {currency.id}
                    </td>
                    <td className="table__cell">
                        {currency.exchangeRate}
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <p className="table__paragraph">Srednie kursy walut aktualne na dzień 01.05.2021r.</p>
        </tfoot>
    </table>
);

export default Table;


