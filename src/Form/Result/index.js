import { ResultParagraph, Strong } from "./styled";

const Result = ({ result }) => (
    result !== undefined && (
        <ResultParagraph className="result">
            Otrzymasz: <Strong>{result.value.toFixed(2)}</Strong> {result.currency}
        </ResultParagraph>
    )
);

export default Result;