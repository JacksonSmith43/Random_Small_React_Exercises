import './App.css';
import ProgressBar from './components/ProgressBar';
import LocalStorage from './components/LocalStorage';
import styled from 'styled-components';

function App() {

  // TODO: This makes it so that the Component is not as it should be. 
  const ProgressBar = styled.button` 
    background-color: green;
    width: 100%;
    height: 20px;
    border-radius: 5px;
    margin-top: 4rem;
  `

  return (
    <>
      <LocalStorage />
      <ProgressBar />
    </>

  );


}

export default App;
