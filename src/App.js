import Form from "./Form";
import Table from "./Table";
import Container from "./Container";
import currencies from "./currencies";



function App() {
  return (
    <>
      <Container>
        <Form currencies={currencies} />

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
