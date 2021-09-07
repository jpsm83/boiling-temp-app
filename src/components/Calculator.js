import React, { Component } from "react";
import BoilingVeredict from "./BoilingVeredict";
import TemperatureInput from "./TemperatureInput";
import { tryConvert, toCelsius, toFahrenheit } from "./ConversionFunctions";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={(temperature) =>
            this.handleCelsiusChange(temperature)
          }
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(temperature) =>
            this.handleFahrenheitChange(temperature)
          }
        />

        <BoilingVeredict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}