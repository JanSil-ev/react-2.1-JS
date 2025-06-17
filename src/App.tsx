import './App.css';
import { carsList } from './cars.const';

function App() {
  console.log(carsList);
  return    <>
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
          <tr key={car.id}>
            <td>{car.brand}</td>
            <td>{car.price}</td>
            <td>{car.year}</td>
            <td>
              <select>
  <option value="someOption">{...car.color}</option>
  <option value="otherOption">{...car.color}</option>
</select>{car.color}</td>
            <td><button className="order-button">Заказать</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
}

export default App;
