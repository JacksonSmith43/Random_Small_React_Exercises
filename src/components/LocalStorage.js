import { useEffect, useRef, useState } from 'react';

const LocalStorage = () => {

    /* TODO:  
        1. Input word.
        2. Save word: setItem.
        3. Reload page: Check whether it has been reloaded. 
        4. Add word from localStorage to the input. 
      */
    const userInput = useRef();

    useEffect(() => { /// Needed help here. 
        if (performance.getEntriesByType("navigation")[0]?.type === "reload") { // Checks whether the page has been reloaded.  
            console.log("Page reload.");
        }

        const getsWord = localStorage.getItem('userInput');
        if (getsWord && userInput.current) { // If getsWord is true then userInput.current will be rendered. 
            userInput.current.value = JSON.parse(getsWord);
        }
    }, []); // It is empty, because it is only supposed to load, when the page is being loaded. 


    function handleSave() {
        const savesWord = localStorage.setItem("userInput", JSON.stringify(userInput.current.value));
    }

    return (
        <div className='input-local-storage-container'>
            <h3>Local Storage I:</h3>
            <input ref={userInput} onChange={handleSave} type='text' placeholder='Add a word.'></input>
        </div>
    );



}

export default LocalStorage;