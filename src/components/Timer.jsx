import { useState, useEffect } from "react";

function Timer(){

    const [seconds, setSeconds] = useState(0);



    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(previous => previous + 1);
            },1000);
         return ()=>{
            clearInterval(timer)
         }

    


        


    },[]);



    return(
        <div>
            <h3>{seconds}</h3>
        </div>
    );

}


export default Timer;
