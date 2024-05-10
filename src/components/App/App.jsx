import { GridArea, Container } from "../Styles/Elements.js"
import './App.css'

const App = () => {
  return (
    <Container>
      <GridArea className="item01">
        <h1>Join our community</h1>
        <h2>30-day, hassle free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.
        </p>
      </GridArea>
      <GridArea className="item02">
        <h1>Sou a segunda seção!</h1>
      </GridArea>
      <GridArea className="item03">
        <h1>Sou a terceira seção!</h1>
      </GridArea>
    </Container>
  );
}

export default App;
