import React from "react";

export default function TemperatureInput(props) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  function handleChange(e) {
    props.onTemperatureChange(e.target.value);
  }

  const temperature = props.temperature;
  const scale = props.scale;

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={(e) => handleChange(e)} />
    </fieldset>
  );
}