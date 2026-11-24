import {useState, useEffect} from "react";


function TitleTracker (){

    const [count, setCount] = useState(0);
    
    function increaseCount(){
        setCount(previous => previous + 1);
    };

    function decreaseCount(){
        setCount(previous => previous -  1);
    };

    useEffect(()=> {
        document.title = `Product : ${count}`;

    }, [count]);



    return(

        <div>
            <button onClick={decreaseCount}>-</button>
            <h3>{count}</h3>
            <button onClick={increaseCount}>+</button>
        </div>


    );

}

export default TitleTracker;