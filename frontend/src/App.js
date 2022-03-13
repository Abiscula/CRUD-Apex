import { Fragment, useEffect } from "react";
import { MyRoutes } from "./routes";
import { Header } from "./Components/Header";
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { Container } from "./assets/styles/styled-App"
import { useLocation } from "react-router";

function App() {

  const location = useLocation()
  console.log(location.pathname)

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      
      <Container location={location}>
        <MyRoutes />
      </Container>
    </Fragment>
  );
}

export default App;
