import Navbar from "./components/NavBar"
import Sidebar from "./components/SideBar"
import DashboardCard from "./components/DashboardCard"
import "./App.css";

function App() {
  return(
    <div>
      <Navbar />

      <div className="mainBody">
        <Sidebar />

        <main>
          <h1>Dashboard</h1>
          <div className="cardDiv">

            <DashboardCard 
            title="Total Products"
            number={200}
            description="Products in Inventory"/>

            <DashboardCard 
            title="Total Orders"
            number={45}
            description="Orders Received"/>

            <DashboardCard 
            title="Low Stock Items"
            number={7}
            description="Items requiring restocking"/>

            <DashboardCard 
            title="Total Revenue"
            number={2500000}
            description="Revenue Generated"/>
          </div>


        </main>
      </div>
    </div>
  );


  
}

export default App;