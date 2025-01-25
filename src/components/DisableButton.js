import { useEffect, useState } from "react";
import styled from "styled-components";


const DisableButton = () => {
    const [disableButton, setDisableButton] = useState(false);
    const [inputValue, setInputValue] = useState();


    useEffect(() => {
        console.log("E: inputValue", inputValue);
        console.log("E: disableButton", disableButton);
        console.log("E: inputValue?.length", inputValue?.length);

        if (inputValue?.length >= 3) { // inputValue?.length = Returns undefined when inputValue does not exist, instead of an error. 
            console.log(">");
            setDisableButton(false);

        } else {
            console.log("<");
            setDisableButton(true);
        }

    }, [inputValue]);


    function handleDisableButton(e) {
        const value = e.target.value;
        setInputValue(value);
    }


    return (
        <DisableButtonContainer tabIndex={0} aria-label='Disable a button.'>
            <h3>Disable a button:</h3>

            <Input aria-label="input"
                placeholder="Add more than three characters."
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleDisableButton}>
            </Input>

            <Button type="button" aria-label="Submit button."
                disabled={disableButton}
            >Click</Button>
        </DisableButtonContainer>
    )
}


const DisableButtonContainer = styled.div`
    text-align: center;
    display: inline-block;
    outline: 0.5rem solid red;
    width: 19rem;
    height: 6rem;
    padding-top: 0.15rem;
    margin: 1rem 1rem;

`

const Button = styled.button`
  background-color: rgb(88, 170, 88);
`

const Input = styled.input`
    width: 12rem;
`


export default DisableButton;