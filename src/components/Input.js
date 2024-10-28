const Input = ({label, name, value, onChange}) => {
    return (
        <div>
            <label>{label}:<input name={name} value={value} onChange={onChange}/></label>
        </div>
    )
}
export default Input