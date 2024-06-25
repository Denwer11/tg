import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  const [certificateData, setCertificateData] = useState(null);
  useEffect(() => {
    // Получение сертификатов от сервера
    const fetchCertificates = async () => {
      try {
        const response = await axios.get("/api/certificates");
        setCertificateData(response.data);
      } catch (error) {
        console.error("Ошибка получения сертификатов:", error);
      }
    };
    fetchCertificates();
  }, []);

  // const onClose = () => {};
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        work
        {/* <button onClick={onClose}>Закрыть</button> */}
      </div>
    </>
  );
}

export default App;
