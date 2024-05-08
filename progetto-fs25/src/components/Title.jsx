import { useContext } from "react";
import LanguageContext from "../LanguageContext";
import Card from "./Card";

function Title() {
  const websiteLang = useContext(LanguageContext);
  return (
    <>
      <h2>La lingua è : {websiteLang}</h2>
      <Card/>
    </>
  );
}

export default Title;
