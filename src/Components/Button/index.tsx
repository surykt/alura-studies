import style from "./Button.module.scss";

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return <button className={style.botao}>{children}</button>;
}
