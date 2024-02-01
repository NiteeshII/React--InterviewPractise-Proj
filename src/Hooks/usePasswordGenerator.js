import React, { useState } from "react";

function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassowrd = (chckboxData, length) => {
    let charset = "";
    let generatePassowrd = "";

    let selectedoption = chckboxData.filter((item) => item.state);

    if (selectedoption.length === 0) {
      setErrorMessage("Select Atleast one option");
      setPassword("");
      return;
    }

    selectedoption.forEach((item) => {
      switch (item.title) {
        case "Include UpperCase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      let RandomIndex = Math.floor(Math.random() * charset.length);
      generatePassowrd += charset[RandomIndex];
    }

    setPassword(generatePassowrd);
    setErrorMessage("");
  };

  return { password, generatePassowrd, errorMessage };
}

export default usePasswordGenerator;
