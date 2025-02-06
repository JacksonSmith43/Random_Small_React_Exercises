import styled from "styled-components";

const ClickMe = () => {

    function handleButtonClick() {
        console.log("Clicked.");
    }


    return (
        <ButtonContainer>
            <h3 tabIndex={0}>Click me:</h3>
            <Button onClick={handleButtonClick} aria-label="Click me button.">Click me</Button>
        </ButtonContainer>
    )

}


const Button = styled.button`
`

const ButtonContainer = styled.div`
    outline: 0.5rem solid red;
    width: 8rem;
    height: 7rem;
    display: inline-block;
    text-align: center;
    margin: ${({ theme }) => theme.spacing.small};

`

export default ClickMe;