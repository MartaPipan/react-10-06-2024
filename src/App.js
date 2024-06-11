import "./App.css";
import Ciao from "./components/Ciao";

function App() {
  return (
    <>
      <Ciao name="Fred" age={43} isMale={true} />
      <Ciao name="Bred" age={45} isMale={true} />
      <Ciao name="Ana" age={27} isMale={false} />
    </>
  );
}

export default App;
