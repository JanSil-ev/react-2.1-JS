import "./App.css";
import { carsList } from "./cars.const";
import CarTable from "./components/CarTable";

function App() {
  return (
    <div>
      <CarTable carsList={carsList} />
    </div>
  );
}

export default App;
