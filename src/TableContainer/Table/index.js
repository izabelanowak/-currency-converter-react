import "./style.css";
import TableData from "./TableData";
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
                    <TableData>
                        {currency.id}
                    </TableData>
                    <TableData>
                        {currency.exchangeRate}
                    </TableData>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;


