import { useState } from "react";
import styled from "styled-components";

// REMINDER: No help needed. 

const HoverCounter = () => {
    const [counter, setCounter] = useState(0);

    function hoverCounter(counter) {
        counter++;
        setCounter(counter);
        console.log("counter: ", counter);
    }


    return (
        <HoverCounterContainer tabIndex={0} aria-label='Hover counter.'>
            <h3>Hover Counter:</h3>
            <Button onMouseEnter={() => hoverCounter(counter)} aria-label="Move over the button to increase the counter.">Hover me</Button>
            <CounterOutput tabIndex={0} aria-label={`Number of counts: ${counter}`}>{counter}</CounterOutput>
        </HoverCounterContainer>
    )

}


const Button = styled.button`
    font-family: sans-serif;
    font-size: 16px;
    background-color: black;
    color: white;
    height: 4rem;
    width: 7rem;
`

const HoverCounterContainer = styled.div`
    text-align: center;
    display: inline-block;
    outline: 0.5rem solid red;
    width: 10rem;
    height: 12rem;
    margin: 1rem 1rem;
    padding-top: 0.15rem;
`

const CounterOutput = styled.p`

`




export default HoverCounter; 