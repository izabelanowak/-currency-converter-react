import { LabelText} from "./styled";

const FormField = ({ label, children }) => (
    <p>
        <label>
            <LabelText className="formField__labelText">{label}</LabelText>
            {children}
        </label>
    </p>
);

export default FormField;