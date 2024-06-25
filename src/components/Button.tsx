// import { children } from "react";

const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={"button " + props.className}>
      {props.children}
    </button>
  );
};
export default Button;
