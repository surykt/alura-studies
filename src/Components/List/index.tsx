import { ISubjects } from "../../shared/ISubjects";
import style from "./List.module.scss";
import Subject from "./Subject";

interface ListProps {
  subjects: ISubjects[]
}

export default function List({ subjects } : ListProps ) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
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
