import './App.css';
import ProgressBar from './components/ProgressBar';
import LocalStorage from './components/LocalStorage';
import CheckboxList from './components/CheckboxList';
import HoverButton from './components/HoverButton';

function App() {

  return (
    <>
      <LocalStorage />
      <ProgressBar />
      <CheckboxList />
      <HoverButton />

    </>
  );


}

export default App;
