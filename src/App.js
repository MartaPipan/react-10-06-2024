import "./App.css";
import Ciao from "./components/Ciao";

function App() {
  return (
    <>
      <Ciao name="Fred" age={43} isMale />
      <Ciao name="Bred" age={45} isMale />
      <Ciao name="Ana" age={27} />
    </>
  );
}

export default App;
