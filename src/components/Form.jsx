import { useRef } from 'react';

function Input({addToList}) {
    const inputRef = useRef(null);

    function handleAddButton() {
        const inputValue = inputRef.current.value; //why const
        if (inputValue !=='') {
            addToList(inputValue);
            inputRef.current.value = ''; // Clear input field after adding
        }
        console.log(inputRef.current.value);
    }

    return (
      <form>
        <input type="text" ref={inputRef} placeholder="e.g. buy milk"></input>
        <button type="button" onClick={handleAddButton}>Add</button>
      </form>
    )
  }
  
  export default Input;