import Navbar from "./components/Navbar";
import IntroductionContent from "./components/IntroductionContent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;