import { ISubjects } from "../../../shared/ISubjects";
import style from "../List.module.scss";

interface SubjectProps extends ISubjects {
  selectedTask: (selectedTask: ISubjects) => void
}

export default function Subject(
  { task,
    time,
    selected,
    completed,
    id,
    selectedTask }: SubjectProps) {

  return (
    <li className={style.item} onClick={() => selectedTask({
      task,
      time,
      selected,
      completed,
      id,
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
