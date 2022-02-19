import { Fragment } from "react";
import { Home } from "./views/Home"
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { Header } from "./Components/Header";
import { Container } from "./assets/styles/styled-App"


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      
      <Container>
        <Home />
      </Container>
    </Fragment>
  );
}

export default App;
