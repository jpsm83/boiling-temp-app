import React, { Component } from "react";
import BoilingVeredict from "./BoilingVeredict";
import TemperatureInput from "./TemperatureInput";
import { tryConvert, toCelsius, toFahrenheit } from "./ConversionFunctions";
import Label from "./Label";

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

  getColor = (theCelsius) => {
    let color;
    console.log("here", theCelsius);

    if (theCelsius < 100) {
      color = "green";
    } else if (theCelsius >= 100 && theCelsius < 200) {
      color = "orange";
    } else if (theCelsius >= 200) {
      color = "red";
    } else {
      color = "black";
    }

    return color;
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    // parseFloat() function is used to accept a string and convert it into a floating-point number
    const colorFromMethod = this.getColor(parseFloat(celsius));

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

        <BoilingVeredict
          celsius={parseFloat(celsius)}
          color={colorFromMethod}
        />
      </div>
    );
  }
}
