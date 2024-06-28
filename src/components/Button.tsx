import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type CombineButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

interface CustomButtonProps extends CombineButtonProps {
  className?: string;
}

const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ className, children, ...otherProps }: CustomButtonProps) => {
  return (
    <button {...otherProps} className={"button " + className}>
      {children}
    </button>
  );
};
export default Button;
