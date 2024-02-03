import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Payments"} orderCount={13} amount={"2,50,000"} />
    </div>
  );
}

export default App;
