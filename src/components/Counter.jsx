import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
    
    function handleIncrease(){
        setCount(previous => previous + 1)
    }
    function handleDecrease(){
        setCount(previous => previous - 1)
    }
    function resetCount(){
        setCount(0)
    }
    function increaseFive(){
        setCount(previous => previous + 5)
    }
    function decreaseFive(){
        setCount(previous => previous - 5)
    }



    return(
        <div className="counters">
            <h2>{count}</h2>
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleDecrease}>-1</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={increaseFive}>+5</button>
            <button onClick={decreaseFive}>-5</button>
        </div>


    );

}

export default Counter;