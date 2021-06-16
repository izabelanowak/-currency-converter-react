const FormField = ({ label, children }) => (
    <p>
        <label className={"form__label"}>
            <span className="form__labelText">{label}</span>
            {children}
        </label>
    </p>
);

export default FormField;