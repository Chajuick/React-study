import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
};

function toCelsius(f) {
    return ((f - 32) *5) / 9;
}

function toFahrenheit(c) {
    return (c * 9) / 5 + 32;
}

function tryConvert(temp, conv) {
    const input = parseInt(temp);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = conv(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default function Calculator() {
    const [temp, setTemp] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temp) => {
        setTemp(temp);
        setScale("c");
    };

    const handleFahrenheitChange = (temp) => {
        setTemp(temp);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit =
        scale === "c" ? tryConvert(temp, toFahrenheit) : temp;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}