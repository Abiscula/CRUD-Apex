import { Fragment, useEffect } from "react";
import { MyRoutes } from "./routes";
import { Header } from "./Components/Header";
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { Container } from "./assets/styles/styled-App"

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      
      <Container>
        <MyRoutes />
      </Container>
    </Fragment>
  );
}

export default App;
