import Navbar from "./components/NavBar"
import Sidebar from "./components/SideBar"
import DashboardCard from "./components/DashboardCard"
import "./App.css";
import Inventory from "./components/Inventory";
import ProductForm from "./components/ProductForm";
import EffectDemo from "./components/EffectDemo";
import Timer from "./components/Timer";
import TitleTracker from "./components/TitleTracker";

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
            description="Products in Inventory"
            productName ="Mouse"/>

            <DashboardCard 
            title="Total Orders"
            number={45}
            description="Orders Received"
            productName="Keyboard"/>

            <DashboardCard 
            title="Low Stock Items"
            number={7}
            description="Items requiring restocking"
            productName="LCD"/>

            <DashboardCard 
            title="Total Revenue"
            number={2500000}
            description="Revenue Generated"
            productName="kkk"/>
          
          </div>
          <Inventory />
          <ProductForm />
          <EffectDemo />
          <Timer />
          <TitleTracker />



        </main>
      </div>
    </div>
  );


  
}

export default App;