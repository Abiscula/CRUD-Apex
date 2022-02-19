import { Fragment } from "react";
import { Home } from "./views/Home";
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { Header } from "./Components/Header";


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
