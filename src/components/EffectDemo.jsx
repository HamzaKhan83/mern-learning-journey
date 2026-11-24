import { useEffect, useState } from "react";

function EffectDemo(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Count has changed: ",count);
    }, [count]);


    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(previous=>previous+1)}}>Increase</button>
        </div>

    );

}

export default EffectDemo;