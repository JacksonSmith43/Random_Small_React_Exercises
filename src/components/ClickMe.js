import styled from "styled-components";

const ClickMe = () => {

    function handleButtonClick() {
        console.log("Clicked.");
    }


    return (
        <ButtonContainer>
            <h3>Click me:</h3>
            <Button onClick={handleButtonClick}>Click me</Button>
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
    margin-left: 2rem;
    text-align: center;
`

export default ClickMe;