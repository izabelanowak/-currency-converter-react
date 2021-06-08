import Form from "./Form";
import Table from "./Table";
import Container from "./Container";
import { useState } from "react";



function App() {
  const [currency, setCurrency] = useState([
    { id: "EUR", exchangeRate: 4.5654, name: "Euro", },
    { id: "GBP", exchangeRate: 5.2491, name: "Funt brytyjski", },
    { id: "USD", exchangeRate: 3.7746, name: "Dolar amerykański", },
    { id: "CHF", exchangeRate: 4.1502, name: "Frank szwajcarski," },
  ]);


  return (
    <>
      <Container>
        <Form />

        <div className="tableContainer">
          <p>
            <button className="table__button"><span>Ukryj</span> aktualne kursy walut</button>
          </p>
          <Table />
          <p className="table__paragraph">Srednie kursy walut aktualne na dzień 01.05.2021r.</p>
        </div>
      </Container>
    </>
  );
}

export default App;
