import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import Timer from "../Components/Timer";
import style from "./App.module.scss";
import { ISubjects } from "../shared/ISubjects";

export default function App() {
  const [subjects, setSubjects] = useState<ISubjects[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setSubjects={setSubjects}/>
      <List subjects={subjects}/>
      <Timer />
    </div>
  );
}
