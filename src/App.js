import Header from   "../src/components/Header";
import Navbar from  "../src/components/Navbar";
import Container from "react-bootstrap/Container";
import "./app.css";

function App() {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  );
}

export default App;
