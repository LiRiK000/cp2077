import { useState, useEffect } from "react";
import HeroComp from "./components/HeroComp/HeroComp";
import Preloader from './components/Preloader/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ? <Preloader /> : <HeroComp />}
    </>
  );
}

export default App;
