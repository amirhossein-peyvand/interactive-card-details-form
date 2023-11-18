import { useMediaQuery } from "react-responsive";
import DesktopDesign from "./components/DesktopDesign";
import MobileDesign from "./components/MobileDesign";

function App() {
  const isGreaterThan1000px = useMediaQuery({ query: "(min-width: 1000px)" });

  return <>{isGreaterThan1000px ? <DesktopDesign /> : <MobileDesign />}</>;
}

export default App;
