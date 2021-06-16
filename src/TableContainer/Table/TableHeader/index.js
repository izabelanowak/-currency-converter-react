const TableHeader = ({ scope, title }) => (
    <th className="table__cell table__cell--header" scope={scope}>{title}</th>
);

export default TableHeader;