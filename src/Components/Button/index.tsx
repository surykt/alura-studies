import style from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
