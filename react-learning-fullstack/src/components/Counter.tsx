import { useState } from 'react';


function Counter() {
 const [count, setCount] = useState(0);

 {return (
    <button onClick={() => setCount((count) => count + 1)}>
           Common Component count is {count}
    </button>
 )}
}

 export default Counter;