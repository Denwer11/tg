import {  Routes } from "react-router-dom";
import Header from "./components/Header";
import Form from "./pages/Form";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";
import './styles/style.scss';

function App() {
  const { onReady } = useTelegram();

  useEffect(() => {
    onReady();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Form />
        <Routes>
          {/* <Route path='/' element={<Form />} /> */}
          {/* <Route path={"/form"} element={<Form />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
