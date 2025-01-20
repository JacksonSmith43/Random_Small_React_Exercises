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
        <HoverCounterContainer>
            <h3>Hover Counter:</h3>
            <Button onMouseEnter={() => hoverCounter(counter)}>Hover me</Button>
            <CounterOutput>{counter}</CounterOutput>

        </HoverCounterContainer>
    )

}



const Button = styled.button`
    font-family: sans-serif;
    font-size: 16px;
    height: 4rem;
    width: 7rem;
`

const HoverCounterContainer = styled.div`
    text-align: center;
    outline: 0.5rem solid red;
    width: 10rem;
    height: 12rem;
    margin: -18rem 59rem 1rem 20rem;
`

const CounterOutput = styled.p`

`




export default HoverCounter; 