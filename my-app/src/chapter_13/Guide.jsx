import { useState } from "react";

export default function Guide(props) {
    const { title, detail, result } = props;
    const [showButton, setShowButton] = useState(false);

    return (
        <li
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 2px grey",
            }}
        >
            <button 
                onClick={() => setShowButton(!showButton)}
            >
                {title}
            </button>
            <div
                style={{
                    opacity: showButton? 1:0
                }}
            >
                <p>
                    {detail} 
                </p>
                <p>
                    {result}
                </p>
            </div>
        </li>
    )
}