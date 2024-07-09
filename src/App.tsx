import Header from "./components/Header";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";
import "./styles/style.scss";
import UserProfileForm from './pages/UserProfileForm';

function App() {
  const { onReady } = useTelegram();

  useEffect(() => {
    onReady();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <UserProfileForm />
      </div>
    </>
  );
}

export default App;
