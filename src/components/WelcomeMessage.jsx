function WelcomeMessage(){

    function handleClick(){
        alert("Welcome to StockPilot");
    }

    return(
        <div className="WelcomeMessage">
            <button onClick={handleClick}>Click Me</button>
            <h1>Welcome to StockPilot</h1>
            <p>Manage your inventory with ease</p>
        </div>
    );


}

export default WelcomeMessage;