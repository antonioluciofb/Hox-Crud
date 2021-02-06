import Header from "./components/header/index";
import Crud from "./components/boxCrud/index";
import { Main } from "./indexStyle";

function App() {
  return (
    <Main>
      <Header></Header>
      <Crud></Crud>
    </Main>
  );
}

export default App;
