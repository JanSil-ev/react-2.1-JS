import type { Car } from "../cars.const"
import { CarTableHeader } from "./CarTableHeader"
import { CarTableRow } from "./CarTableRow"

const CarTable = ({ carsList } : { carsList: Car[] }) => (
    <table className="styled-table">
        <CarTableHeader />
        <tbody>
            {carsList.map((car) => (
                <CarTableRow key={car.brand + car.model} car={car} />
            ))}
        </tbody>
    </table>
)

export default CarTable
