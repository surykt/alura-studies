import Form from "../Components/Form";
import List from "../Components/List";
import Timer from "../Components/Timer";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}
