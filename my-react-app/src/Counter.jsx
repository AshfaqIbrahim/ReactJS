//useState

import React, {useState} from 'react';

function Counter (){

    const [count, setCount] = useState(0);
   
    //Functions for setCount
    const increment = ()=> {
        setCount(count + 1)
    }

    const decrement = ()=> {
        setCount(count - 1)
    }

    const reset = ()=> {
        setCount(0)
    }

    //return the output
    return(<>

        <p className="counter">Orders : {count}</p>
        <div className="counter-container">
            <button className="btn" onClick={increment}>Increase</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={decrement}>Decrease</button>
        </div>

        </>)
    
}

export default Counter;