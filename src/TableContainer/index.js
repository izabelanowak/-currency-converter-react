import "./style.css";
import Table from "../Table";

const tableContainer = ({ currencies }) => (
    <div className="tableContainer">
        <button className="table__button"><span>Ukryj</span> aktualne kursy walut</button>
        <Table currencies={currencies} />
        <p className="table__paragraph">Srednie kursy walut aktualne na dzień 01.05.2021r.</p>
    </div>
);

export default tableContainer;