import { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0)
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button style={{background: 'black', color: 'white', padding: '10px', margin: '10px'}} onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

export default MyButton