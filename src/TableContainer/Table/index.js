import "./style.css";
import TableHeader from "./TableHeader";

const Table = ({ currencies, hideTable }) => (
    <table className={`table${hideTable ? " table--hidden" : ""}`}>
        <caption className="table__caption">Aktualne kursy walut</caption>
        <thead>
            <tr className="table__row">
                <TableHeader scope="col" title="Nazwa" />
                <TableHeader scope="col" title="Waluta" />
                <TableHeader scope="col" title="Kurs" />
            </tr>
        </thead>
        <tbody>
            {currencies.map(currency => (
                <tr className="table__row" key={currency.id}>
                    <TableHeader scope="row" title={currency.name} />
                    <td className="table__cell">
                        {currency.id}
                    </td>
                    <td className="table__cell">
                        {currency.exchangeRate}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;


