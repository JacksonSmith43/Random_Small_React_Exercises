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

function App() {

  return (
    <>
      <ProgressBar />
      <MessageFeed />
      <CheckboxList />
      <HoverCounter />
      <DisableButton />
      <LocalStorage />
      <HoverButton />
      <TemperatureConverter />
      <ClickMe />

    </>
  );


}

export default App;
