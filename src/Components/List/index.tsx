import { ISubjects } from "../../shared/ISubjects";
import style from "./List.module.scss";
import Subject from "./Subject";

interface ListProps {
  subjects: ISubjects[];
  selectedTask: (selectedTask: ISubjects) => void;
}

export default function List({ subjects, selectedTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {subjects.map(subject => (
          <Subject key={subject.id} {...subject} selectedTask={selectedTask} />
        ))}
      </ul>
    </aside>
  );
}
