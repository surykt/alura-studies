import React from "react";
import "./style.scss";

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return <button className="botao">{children}</button>;
}
