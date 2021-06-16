import "./style.css";

const Result = ({ result }) => (
    result !== undefined && (
        <p className="result">
            {`Otrzymasz:`} <strong className="result--strong">{result.value.toFixed(2)}</strong> {result.currency}
        </p>
    )
);

export default Result;