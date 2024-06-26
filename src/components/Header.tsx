import { useTelegram } from '../hooks/useTelegram';
import Button from "./Button";

// import "./Header.css";

const Header = () => {
  const {onClose} = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};

export default Header;