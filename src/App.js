import './App.css';
import ProgressBar from './components/ProgressBar';
import LocalStorage from './components/LocalStorage';
import CheckboxList from './components/CheckboxList';
import HoverButton from './components/HoverButton';
import MessageFeed from './components/MessageFeed';
import HoverCounter from './components/HoverCounter';
import DisableButton from './components/DisableButton';
import TemperatureConverter from './components/TemperatureConverter';
import ClickMe from './components/ClickMe';
import Counter from './components/Counter';
import FixSyntaxErrorsClassCounter from './components/FixSyntaxErrorsClassCounter';
import FixSyntaxErrorsFunctional from './components/FixSyntaxErrorsFunctional'
import { theme } from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProgressBar />
        <MessageFeed />
        <CheckboxList />
        <HoverCounter />
        <DisableButton />
        <LocalStorage />
        <HoverButton />
        <TemperatureConverter />
        <ClickMe />
        <Counter />
        <FixSyntaxErrorsClassCounter />
        <FixSyntaxErrorsFunctional />
      </ThemeProvider>
    </>
  );


}

export default App;
