import styled from 'styled-components'
import { theme } from './styles/GlobalStyles';

// REMINDER: Needed a bit of help here. For example: const Progress = styled.button vs. HTML and CSS Code and where what is allowed to be 

const Progress = styled.button` 
    width: ${(props) => props.percent || 0}%;
    height: 2rem;
    background: green;
    border-radius: 0.5rem;
    transition: width 0.3s ease-in-out;
`

// styled.div created a new React component that is a styled div Element. 
const ProgressBarContainer = styled.div`    
    width: 100%;
    height: ${({ theme }) => theme.buttonSize.width};    
    background-color: rgb(196, 186, 186);
    border-radius: 0.5rem;

`

const ProgressBar = ({ percent }) => {
    return (
        <div className='progress-bar-outline' aria-label='Progressbar field' tabIndex={0}>
            <h3 >Progress Bar:</h3>
            <ProgressBarContainer >
                <Progress percent={20} aria-label={`Progress: ${percent}%`} />
            </ProgressBarContainer>
        </div>
    );
};

export default ProgressBar;