
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


const HoverButton = () => {
    return (
        <div className='styled-button-container'>
            <h4>Styled Button:</h4>
            <Button className='button-container'>
                Click me
            </Button>
        </div>
    );
}

export default HoverButton;