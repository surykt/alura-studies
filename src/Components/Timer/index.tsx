import Button from "../Button";
import Watch from "./Watch";
import style from "./Time.module.scss";

export default function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button children="Começar!" />
    </div>
  );
}
