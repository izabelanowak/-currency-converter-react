const FormField = ({ label, body }) => (
    <p>
        <label className={"form__label"}>
            <span className="form__labelText">{label}</span>
            {body}
        </label>
    </p>
);

export default FormField;