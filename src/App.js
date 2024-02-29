import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { DefaultTemplate } from "./templates/DefaultTemplate";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <DefaultTemplate>
          <Routes />
        </DefaultTemplate>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
