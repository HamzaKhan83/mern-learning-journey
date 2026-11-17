import ProductAvailability from "./ProductAvailability";

function Inventory(){
    const products = [
    { id: 1, name: "Mouse", quantity: 0 },
    { id: 2, name: "Keyboard", quantity: 3 },
    { id: 3, name: "Monitor", quantity: 15 },
    { id: 4, name: "Headphones", quantity: 5 },
    { id: 5, name: "USB Cable", quantity: 20 }
    ];

    const count = products.length;


    const mappedProducts = products.map(product => {
        return(<ProductAvailability key={product.id} productName={product.name} quantity={product.quantity} />);
        
    });

    const lowStockProducts = products.filter(product => (product.quantity<=5)
    );

    const mapLowStockProduct = lowStockProducts.map(product => (
        <p>{product.name} is low on stock PS. we got this with filter</p>
    ));

    const availableProducts = products.filter(product => product.quantity>5).map(product =>(
        <ProductAvailability key={product.id} productName={product.name} quantity={product.quantity} />
    ));

    


    return(
        <div>
            <h2>My Inventory</h2>
            <p>Total Product Count = {count}</p>
            {mappedProducts}
            <h2>Low Stock</h2>
            {mapLowStockProduct}
            <h2>Available Products</h2>
            {availableProducts}
        </div>


    );

}

export default Inventory;