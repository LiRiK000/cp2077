import { useState, useEffect } from "react";
import Preloader from './components/Preloader/Preloader';
import Layout from "./components/Layout/Layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ? <Preloader /> : <Layout />}
    </>
  );
}

export default App;
