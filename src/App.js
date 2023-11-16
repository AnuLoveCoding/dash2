import './App.css';
import ResponsiveDrawer from "./Pages/dash";
import { BrowserRouter } from "react-router-dom";

 
function App() {
  var darkMode=true
  return (
      <BrowserRouter>
      <ResponsiveDrawer sx={darkMode?{ backgroundColor:'black', color: 'white'} : {backgroundColor:'white', color: 'black'}}   />
      </BrowserRouter>
   
  );
}

export default App;
