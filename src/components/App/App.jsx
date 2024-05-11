import { GridArea, Container, Button } from "../Styles/Elements.js"
import './App.css'

const App = () => {
  return (
    <Container>
      <GridArea className="itemJoinUs">
        <h1>Join our community</h1>
        <h2>30-day, hassle free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.
        </p>
      </GridArea>
      <GridArea className="itemMoSubs">
        <div className="subsPlan">
          <h1>Monthly Subscription</h1>
          <div className="wrapper">
            <span className="subsPricing">$29</span>
            <span className="billingTimeSpan">per month</span>
          </div>
          <p>Full access for less than $1 a day</p>
        </div>
        <Button>Sign Up</Button>
      </GridArea>
      <GridArea className="itemWhyUs">
        <h1>Why Us</h1>
        <ul className="list">
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </GridArea>
    </Container>
  );
}

export default App;
