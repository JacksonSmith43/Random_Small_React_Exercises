
import styled from 'styled-components'

// REMINDER: No help needed. 

const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    height: 4rem;
    width: 8rem;

    &:hover{
    background-color: lightblue;
    color: black;
    }
`

const ButtonContainer = styled.div`
    display: inline-block;
    text-align: center;
    width: 11rem;
    height: 9rem;
    outline: 0.5rem solid red;
    margin: ${({ theme }) => theme.spacing.small};

`


const HoverButton = () => {
    return (
        <ButtonContainer aria-label='Styled button.' tabIndex={0}>
            <h3>Styled Button:</h3>
            <Button className='button-container' aria-label='Click me button.'>
                Click me
            </Button>
        </ButtonContainer>
    );
}

export default HoverButton;