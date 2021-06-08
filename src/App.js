import './App.css';
import Form from "./Form";
import Table from "./Table";


function App() {
  return (
    <>
      <div className="container">
        <Form />

        <div className="tableContainer">
          <p>
            <button className="table__button js-tableButton"><span className="js-buttonText">Ukryj</span> aktualne kursy
                walut</button>
          </p>
          <Table />
          <p className="table__paragraph">Srednie kursy walut aktualne na dzień 01.05.2021r.</p>
        </div>
      </div>
    </>
  );
}

export default App;
