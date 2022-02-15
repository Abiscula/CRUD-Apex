import { Fragment } from "react";
import { Login } from "./Components/Login";
import { GlobalStyle } from './styles/GlobalStyle'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Login />
    </Fragment>
  );
}

export default App;
