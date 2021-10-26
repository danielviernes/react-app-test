import InputField from "./components/InputField";
import OutputField from "./components/OutputField";
import Section from "./components/Section";
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");

  function setInputField() {
    return <InputField setInputValue={setInputValue} className="input-field"/>
  }

  function setOutputField() {
    return <OutputField inputValue={inputValue} className="output-field"/>
  }

  return (
    <div className="main-div">
      <Section type="input" subText="Array" field={setInputField}/>
      <Section type="output" subText="Double" field={setOutputField}/>
    </div>
  );
}

export default App;
