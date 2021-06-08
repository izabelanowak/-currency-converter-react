import Container from "./Container";
import Form from "./Form";
import TableContainer from "./TableContainer";
import currencies from "./currencies";

function App() {
  return (
    <>
      <Container>
        <Form currencies={currencies} />
        <TableContainer currencies={currencies} />
      </Container>
    </>
  );
}

export default App;
