import "./App.css";
import BowlerList from "./BowlerList";
import "bootstrap/dist/css/bootstrap.min.css";
function Welcome() {
  return (
    <>
      <h1>Bowler Information</h1>{" "}
      <p>This table will show the bowlers from teams Marlins and Sharks</p>
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BowlerList />
    </>
  );
}

export default App;
