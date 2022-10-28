// import logo from './logo.svg';
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Menu from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <Container>
          <Login />
        </Container>
      </Container>
    </div>
  );
}

export default App;
