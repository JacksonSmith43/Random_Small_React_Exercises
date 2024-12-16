import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {
    return (
        <div data-testid="progress-bar-container">
            <h3>Progress Bar:</h3>
            <div data-testid="progress" />
            <button></button>
            <button>2. Progress bar.</button>
        </div>
    );
};

export default ProgressBar;