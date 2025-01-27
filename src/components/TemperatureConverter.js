import { useEffect, useState } from "react";
import styled from "styled-components";


const TemperatureConverter = () => {
    const [kelvin, setKelvin] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);


    function temperatureCalculator(e) {
        const inputValue = e.target.value;

        setKelvin(Number(inputValue) + Number(273.15));
        setFahrenheit((Number(inputValue) * (9 / 5)) + 32);

        console.log("inputValue:", inputValue); // Celsius value. 
        console.log("kelvin:", kelvin);
        console.log("fahrenheit:", fahrenheit);
    }

    return (
        <TemperatureConverterContainer>
            <h3>Temperature Converter:</h3>

            <form>
                <input
                    data-testid='input-id'
                    className="temperature-input"
                    name="input"
                    type="number"
                    aria-label="Temperature input field."
                    onChange={temperatureCalculator} // Same as: onChange={(e) => temperatureCalculator(e)}
                />
                <label htmlFor="input">°C</label>

            </form>

            <p data-testid='output' className="temperature-output">
                {kelvin} Kelvin {fahrenheit} °F
            </p>
        </TemperatureConverterContainer>
    );

}


const TemperatureConverterContainer = styled.div`
    outline: 0.5rem solid red;
    padding: 1rem 1rem;
    width: 15rem;
    margin-left: 1rem;
    
`


export default TemperatureConverter;