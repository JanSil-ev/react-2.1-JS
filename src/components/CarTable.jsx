import { CarTableHeader } from "./CarTableHeader";
import { CarTableRow } from "./CarTableRow";

const CarTable = ({ carsList }) => (
  <table className="styled-table">
    <CarTableHeader />
    <tbody>
      {carsList.map((car) => (
        <CarTableRow key={car.brand + car.model} car={car} />
      ))}
    </tbody>
  </table>
);

export default CarTable;
