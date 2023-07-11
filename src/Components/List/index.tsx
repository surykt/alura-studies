import { useState } from "react";
import style from "./List.module.scss";
import Subject from "./Subject";

export default function List() {
  const [subjects, setSubjects] = useState([
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
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setSubjects([
            ...subjects,
            { task: "Estudar estado", time: "05:00:00" },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {subjects.map((subject, index) => (
          <Subject key={index} {...subject} />
        ))}
      </ul>
    </aside>
  );
}
