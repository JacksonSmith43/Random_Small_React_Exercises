import styled from 'styled-components'
// REMINDER: Needed a bit of help here. For example: const Progress = styled.button vs. HTML and CSS Code and where what is allowed to be 

const Progress = styled.button` 
    width: ${(props) => props.percent || 0}%;
    height: 2rem;
    background: green;
    border-radius: 0.5rem;
    border-color: green;
    transition: width 0.3s ease-in-out;
`

// styled.div created a new React component that is a styled div Element. 
const ProgressBarContainer = styled.div`    
    width: 100%;
    height: 2rem;
    background-color: rgb(196, 186, 186);
    border-radius: 0.5rem;
    margin-top: 1rem;
`

const ProgressBar = ({ percent }) => {
    return (
        <>
            <h3 >Progress Bar:</h3>
            <ProgressBarContainer>
                <Progress percent={80} />
            </ProgressBarContainer>
        </>
    );
};

export default ProgressBar;