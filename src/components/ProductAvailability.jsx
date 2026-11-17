function ProductAvailability({productName, quantity}){

    let status;
    if(quantity === 0){
    status = <p>{productName} is Out of Stock!</p>
    }else if(quantity>0 && quantity<=5){
    status = <p>{productName} is Low on Stock!</p>
    }else{
    status = <p>{productName} is Available!</p>
    }
    


    return(
        <div>
            {status}
        </div>
    );
}

export default ProductAvailability;