import { RouterProvider } from "react-router-dom";
import demo from "./routes";
import "./assets/css/style.css";

function App() {
  return <RouterProvider router={demo} />;
}

export default App;
