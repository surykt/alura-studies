import { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

export default function Form() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(task, time);
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          id="task"
          name="task"
          value={task}
          onChange={event => setTask(event.target.value)}
          required
          placeholder="O que voçê quer estudar ?"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          id="time"
          name="time"
          type="time"
          value={time}
          onChange={event => setTime(event.target.value)}
          required
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button children="Button" />
    </form>
  );
}
