import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Calculator from "./calci";
import background from "../src/pic/grey-texture-background-d29qkeb2b46ygint.jpg";
import Numbers from "./numbers";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        background:'black'
      }}
    >
      <Numbers />
      <Calculator />
    </div>
  );
}

export default App;
