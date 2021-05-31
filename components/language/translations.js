import Link from "next/link";
import { useState } from "react";

const Translations = () => {
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
        <ul>
            {languages.map((language) => {
                return (
                    <li key={language.code}>
                        <Link as={`/${language.code}/`} href={`/${language.code}/`}>
                            <a>{language.name}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Translations