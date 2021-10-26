function InputField(props) {

    function handleValueChange(event) {
        props.setInputValue(event.target.value);
    }

    return(
        <input type="text" onChange={handleValueChange} className={props.className}/>
    );
}

export default InputField;