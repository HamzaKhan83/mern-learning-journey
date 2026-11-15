import WelcomeMessage from "./WelcomeMessage";  
function Navbar(){

    return (
        <nav>
            <WelcomeMessage />
            <h2>StockPilot</h2>
            <p>Inventory Management System</p>
        </nav>

    );
}

export default Navbar;
