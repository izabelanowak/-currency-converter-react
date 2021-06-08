import "./style.css";
import Table from "../Table";

const tableContainer = ({ currencies }) => (
    <div className="tableContainer">
        <p>
            <button className="table__button"><span>Ukryj</span> aktualne kursy walut</button>
        </p>
        <Table currencies={currencies} />
        <p className="table__paragraph">Srednie kursy walut aktualne na dzień 01.05.2021r.</p>
    </div>
);

export default tableContainer;