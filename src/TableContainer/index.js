import "./style.css";
import Table from "../Table";
import { useState } from "react";

const TableContainer = ({ currencies }) => {
    const [hideTable, setHideTable] = useState(true);

    const toggleHideTable = () => {
        setHideTable(hideTable => !hideTable);
    };

    return (
        <div className="tableContainer">
            <button
                className="tableContainer__button"
                onClick={toggleHideTable}
            >
                {hideTable ? "Pokaż" : "Ukryj"} aktualne kursy walut
            </button>
            <Table currencies={currencies} hideTable={hideTable} />
            <p className={`tableContainer__paragraph${hideTable ? " tableContainer__paragraph--hidden" : ""}`}>
                Srednie kursy walut aktualne na dzień 01.05.2021r.
            </p>
        </div>
    )
};

export default TableContainer;