import Counter from "./Counter";
import ProductQuantity from "./ProductQuantity";

function DashboardCard({
    title="Untitled",
    number=0,
    description="No description available.", 
    productName ="Undefined"}) {
    return (
        <div>
            <h3>{title}</h3>
            <h1>{number}</h1>
            <p>{description}</p>
            <Counter />
            <ProductQuantity productName={productName}/>
        </div>
    );
}

export default DashboardCard;