import Button from "../Button";
import Watch from "./Watch";
import style from "./Time.module.scss";
import timeInSeconds from "../../common/ utility/time";
import { ISubjects } from "../../shared/ISubjects";
import { useEffect, useState } from "react";

interface TimerProps {
  isSelected?: ISubjects;
}

export default function Timer({ isSelected }: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (isSelected?.time) {
      setTime(timeInSeconds(isSelected.time));
    }
  }, [isSelected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button children="Começar!" />
    </div>
  );
}
