import React, { useContext } from "react";
import './Card.css'
import LanguageContext from "../LanguageContext";
import List from "./List";

function Card() {
  const websiteLang = useContext(LanguageContext)
  return (
    <div className="card">
      <h3>Lingua = {websiteLang}</h3>
      <List/>
    </div>
  );
}

export default Card;
