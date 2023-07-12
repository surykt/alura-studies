import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import Timer from "../Components/Timer";
import style from "./App.module.scss";
import { ISubjects } from "../shared/ISubjects";

export default function App() {
  const [subjects, setSubjects] = useState<ISubjects[]>([]);
  const [isSelected, setIsSelected] = useState<ISubjects>()

function selectedTask(selectedTask: ISubjects) {
  setIsSelected(selectedTask)
}

  return (
    <div className={style.AppStyle}>
      <Form setSubjects={setSubjects}/>
      <List subjects={subjects} selectedTask={selectedTask}/>
      <Timer />
    </div>
  );
}
