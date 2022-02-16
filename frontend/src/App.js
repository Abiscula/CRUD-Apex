import { Fragment } from "react";
import { Home } from "./views/Home";
import { GlobalStyle } from './styles/GlobalStyle'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
