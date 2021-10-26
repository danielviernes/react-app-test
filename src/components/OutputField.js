function OutputField(props) {

    function setDoubleValues(event) {
        var inputValues = JSON.stringify(props.inputValue).replaceAll("\"", "").split(/[\s,]+/);
        var doubledValues = [];

        for( var i = 0; i < inputValues.length; i++) {
            if(Number.isNaN(parseInt(inputValues[i])))
                continue;
                
            doubledValues.push(parseInt(inputValues[i])*2)

        }

        return doubledValues;
    }

    return(
        <input type="text" className={props.className} readOnly value={setDoubleValues()}/>
    );
}

export default OutputField;