// import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// const tg = window.Telegram.WebApp;
const botToken = "7429937238:AAHxXYLfQlB3RHTrbO847nNusEQ1RjZ2d7w";

axios
  .get(`https://api.telegram.org/bot${botToken}/`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

function App() {
  // const [certificateData, setCertificateData] = useState(null);
  // useEffect(() => {
  //   // Получение сертификатов от сервера
  //   const fetchCertificates = async () => {
  //     try {
  //       const response = await axios.get("/api/certificates");
  //       setCertificateData(response.data);
  //     } catch (error) {
  //       console.error("Ошибка получения сертификатов:", error);
  //     }
  //   };
  //   fetchCertificates();
  // }, []);

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
