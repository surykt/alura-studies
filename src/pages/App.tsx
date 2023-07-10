import React from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}
