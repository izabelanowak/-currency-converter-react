import "./style.css";

const FormField = ({ label, children }) => (
    <p className="formField">
        <label className={"formField__label"}>
            <span className="formField__labelText">{label}</span>
            {children}
        </label>
    </p>
);

export default FormField;