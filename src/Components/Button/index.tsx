import style from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, type }: ButtonProps) {
  return <button className={style.botao} type={type}>{children}</button>;
}
