import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {


  /* Local Storage I stuff. */
  // 1. Check if something has been inputed.
  // 2. useState to safe the state of the word.
  // 
  const [isWordInputed, setIsWordInputed] = useState(false);
  const [isSavedWord, setIsSavedWord] = useState();
  const [isPageReloaded, setIsPageReloaded] = useState();

  const userInput = useRef();

  useEffect(() => {
    setIsSavedWord(localStorage.setItem("userInput", JSON.stringify(userInput.current.value)));
  }, [userInput.current]);


  function checksReload() {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") { // Checks whether the page has been reloaded. /// Needed help here.  
      setIsPageReloaded(true);
      console.log("Page reload.");

    } else {
      setIsPageReloaded(false);
    }

  }


  return (
    <div className='input-local-storage-container'>
      <input ref={userInput} onChange={checksReload} value={`${isWordInputed ? JSON.parse(localStorage.getItem('userInput')) : ""}`} type='text' placeholder='Add a word.'></input>
    </div>
  );

}

export default App;
