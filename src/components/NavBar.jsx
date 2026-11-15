import WelcomeMessage from "./WelcomeMessage";  
import CardContainer from "./CardContainer";    

function Navbar(){

    return (
        <nav>
            <CardContainer>
                <WelcomeMessage />
            </CardContainer>

            <h2>StockPilot</h2>
            <p>Inventory Management System</p>
        </nav>

    );
}

export default Navbar;
