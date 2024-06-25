import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Form from "./pages/Form";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";

function App() {
  const { onToggleButton, onReady } = useTelegram();

  useEffect(() => {
    onReady();
  }, []);

  return (
    <>
      <div className="App">
        work
        <button onClick={onToggleButton}>toggle</button>
        <Header />
        <Routes>
          <Route index element={<Form />} />
          {/* <Route path={"/form"} element={<Form />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
