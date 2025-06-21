import './App.css'
import { carsList } from './cars.const'
import { CarTableRow } from './components/CarTableRow'

function App() {
    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr className="h1">
                        <th>Марка</th>
                        <th>Цена</th>
                        <th>Год</th>
                        <th>Цвет</th>
                        <th>Заказать</th>
                    </tr>
                </thead>
                <tbody>
                    {carsList.map((car) => (
                        <CarTableRow key={car.brand + car.model} car={car} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
