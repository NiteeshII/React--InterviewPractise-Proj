import { useState } from "react";
import "./App.css";
import InputChck from "./Component/inputChck";
import PasswordStrength from "./Component/PasswordStrength";
import Button from "./Component/Button";
import usePasswordGenerator from "./Hooks/usePasswordGenerator";

function App() {
  const [copied, setcopied] = useState(false);
  const [charLength, setCharLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {
      title: "Include UpperCase Letters",
      state: false,
    },
    {
      title: "Include LowerCase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  const { password, generatePassowrd, errorMessage } = usePasswordGenerator();

  console.log(password, errorMessage);

  const handleChange = (index) => {
    const updatedState = [...checkboxData];
    updatedState[index].state = !updatedState[index].state;
    setCheckboxData(updatedState);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText("Niteesh@1234");
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1 className="pswrd-title">Password Generator</h1>
      <div className="pswd-Gen-container">
        {password ? (
          // heading part inside the container
          <div className="pswrd-cont">
            <span className="pswrd">{password}</span>
            <Button
              handleClick={handleCopyClick}
              className="pswrd-copy"
              title={copied ? "copied" : "copy"}
            />
          </div>
        ) : (
          <span className="pswrd-error">{errorMessage}</span>
        )}
        {/* passwrd Range and character length  */}
        <div className="pswrd-chartSet">
          <span>
            <label>Character Length :</label>
            <label>{charLength}</label>
          </span>
          <input
            type="Range"
            min={5}
            max={20}
            value={charLength}
            onChange={(e) => setCharLength(e.target.value)}
          />
        </div>
        {/* input Checkboxes */}
        <div className="chckbox-container">
          {checkboxData?.map(({ title, state }, index) => {
            return (
              <InputChck
                key={index}
                title={title}
                isChecked={state}
                handleChange={() => handleChange(index)}
              />
            );
          })}
        </div>
        {/* Password strength */}
        <PasswordStrength password={password} />

        {/* Password Generator Button */}
        <Button
          title="Generate Password"
          className="Genrate-pswrd"
          handleClick={() => generatePassowrd(checkboxData, charLength)}
        />
      </div>
    </div>
  );
}

export default App;
