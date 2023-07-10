import React from "react";
import style from "./List.module.scss";

export default function List() {
  const subjects = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "03:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index} className={style.item}>
            <h3>{subject.task}</h3>
            <span>{subject.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
