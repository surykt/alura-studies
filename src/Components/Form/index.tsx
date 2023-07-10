import React from "react";
import Button from "../Button";
import "./style.scss";

export default function Form() {
  return (
    <form className="novaTarefa">
      <div className="inputContainer">
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          id="task"
          name="task"
          required
          placeholder="O que voçê quer estudar ?"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="time">Tempo</label>
        <input
          id="time"
          name="time"
          type="time"
          required
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button children="Button" />
    </form>
  );
}
