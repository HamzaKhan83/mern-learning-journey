import { useState } from "react";

function ProductForm (){

    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        let addedProduct = {
            id : Date.now(),
            name : productName,
            quantity : quantity,
            price : price
        }

        setProducts(previousProducts => [...previousProducts, addedProduct]);

        
    }


    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value = {productName}
                onChange={(event) => setProductName(event.target.value)}
                required/>

                <h3>The product is {productName}</h3>

                <input type="number"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                />

                <h3>Quantity: {quantity}</h3>

                <input type="number"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))} 
                />

                <h3>Price: {price}</h3>
                <h3>Total Value = {quantity * price}</h3>


                 <button type="submit">Submit</button>
            </form>

                <h2>Inventory List</h2>

                {
                    products.map(product =>(  
                          <div key={product.id}>
                              <h3>{product.name}</h3>
                              <p>Quantity: {product.quantity}</p>
                              <p>Price: {product.price}</p>
                              <p>Total: {product.quantity * product.price}</p>
                          </div>))
                }

           


        </div>


    );


}

export default ProductForm;