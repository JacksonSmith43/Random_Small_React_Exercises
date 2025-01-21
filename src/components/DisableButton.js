import styled from "styled-components";

const DisableButton = () => {

    return (
        <DisableButtonContainer tabIndex={0} aria-label='Disable a button.'>
            <h3>Disable a button:</h3>
            <Input aria-label="input" placeholder="Add more than three characters."></Input>
            <Button type="button" aria-label="Submit button.">Click</Button>
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