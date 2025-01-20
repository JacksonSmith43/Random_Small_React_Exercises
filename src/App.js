import './App.css';
import ProgressBar from './components/ProgressBar';
import LocalStorage from './components/LocalStorage';
import CheckboxList from './components/CheckboxList';
import HoverButton from './components/HoverButton';
import MessageFeed from './components/MessageFeed';
import HoverCounter from './components/HoverCounter';

function App() {

  return (
    <>
      <ProgressBar />
      <CheckboxList />
      <HoverCounter/>
      <LocalStorage />

      <HoverButton />
      <MessageFeed/>

    </>
  );


}

export default App;
