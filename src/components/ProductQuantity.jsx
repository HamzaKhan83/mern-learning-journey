import { useState } from "react";

function ProductQuantity({productName}){

    const [count,setCount] = useState(10);

    function sell(){
        if(count === 0){
            alert("No products in Inventory. Please restock to sell.")
        }else{
            setCount(previous => previous - 1)
        }
    }
    function sellFive(){
        if(count <5){
            alert("Less than 5. Please restock or sell less.")
        }else{
            setCount(previous => previous - 5);
        }
    }
    function restockFive(){
        setCount(previous => previous + 5)
    }
    function restockTen(){
        setCount(previous => previous + 10)
    }


    return(
        <div className="productQuantityCard">

            <h2>{productName}</h2>
            <h6>{count}</h6>
            <button onClick={sell}>Sell</button>
            <button onClick={sellFive}>Sell 5</button>
            <button onClick={restockFive}>Restock 5</button>
            <button onClick={restockTen}>Restock 10</button>

        </div>
    );
}
export default ProductQuantity;