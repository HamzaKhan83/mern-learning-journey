import Counter from "./Counter";
import ProductQuantity from "./ProductQuantity";
import ProductAvailability from "./ProductAvailability";

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
            <ProductAvailability productName="Mouse" quantity={5}/>
            <ProductAvailability productName="Key" quantity={0}/>
            <ProductAvailability productName="LED" quantity={10}/>
        </div>
    );
}

export default DashboardCard;