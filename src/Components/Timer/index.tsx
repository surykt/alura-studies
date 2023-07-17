import Button from "../Button";
import Watch from "./Watch";
import style from "./Time.module.scss";
import timeInSeconds from "../../common/ utility/time";
import { ISubjects } from "../../shared/ISubjects";
import { useEffect, useState } from "react";

interface TimerProps {
  isSelected?: ISubjects;
  finishTask: () => void;
}

export default function Timer({ isSelected, finishTask }: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (isSelected?.time) {
      setTime(timeInSeconds(isSelected.time));
    }
  }, [isSelected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button children="Começar!" onClick={() => regressive(time)} />
    </div>
  );
}
