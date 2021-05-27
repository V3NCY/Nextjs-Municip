import Link from "next/link";
import { useState } from "react";


const Preferences = () => {

  const [languages] = useState([
    {
      code: "en",
      name: "English",
    },
    {
      code: "bg",
      name: "Български",
    },
  ]);

  return (
    <>
      {languages.map((language) => {
        return (
          <ul key={language.code}>
            <Link as={`/${language.code}/`} href={`/language`}>
              <a>{language.name}</a>
            </Link>
          </ul>
        );
      })}
    </>
  );
};

export default Preferences