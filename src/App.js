import './App.css';
import ResponsiveDrawer from "./Pages/dash";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <ResponsiveDrawer />
      </BrowserRouter>
   
  );
}

export default App;
