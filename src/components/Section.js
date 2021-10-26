
function Section(props) {

    function setHeader() {
        if(props.type === "input") { 
            return "Input";
        } else if(props.type === "output") { 
            return "Output";
        }
    }

    function setSectionDivStyle() {
        return "input" === props.type ? "input-section" : "output-section";
    }

    return(
        <div className={`section-div ${setSectionDivStyle()}`}>
            <h2>{setHeader()}</h2>
            <span>{props.subText}</span>
            {props.field()}
        </div>
    );
}

export default Section;