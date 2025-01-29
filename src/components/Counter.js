import { useState } from "react";
import styled from "styled-components";


const Counter = () => {
    let [counter, setCounter] = useState(0);

    function handleIncrement() {
        counter++;
        setCounter(counter);
        console.log("counter: ", counter);
    }

    function handleDecrement() {
        counter--;
        setCounter(counter);
        console.log("counter: ", counter);
    }

    return (
        <ButtonsContainer>
            <h3 tabIndex={0}>Counter:</h3>
            <Button onClick={handleIncrement} aria-label="Increment button.">Increment</Button>
            <Button onClick={handleDecrement} aria-label="Decrement button.">Decrement</Button>

            <CounterOutput tabIndex={0} aria-label={`Number of counter times: ${counter}`}>{counter}</CounterOutput>
        </ButtonsContainer>
    );
}

const Button = styled.button`
    margin-left: 0.5rem;
`
const ButtonsContainer = styled.div`
    display: inline-block;
    outline: 0.5rem solid red;
    width: 14rem;
    height: 8rem;
    text-align: center;
    margin-left: 2rem;
`

const CounterOutput = styled.h4`
`

export default Counter;