import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styles } from "./styles";

interface Props {
    text: string;
}

const Console = (props: Props) => {
    const [consoleText, setConsoleText] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [activeConsoleText, setActiveConsoleText] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (activeConsoleText) {
            const timer = setInterval(() => {
                if (count < props.text.length) {
                    setConsoleText((prevText) => prevText + props.text.charAt(count));
                    setCount((prevCount) => prevCount + 1);
                } else {
                    clearInterval(timer);
                    setActiveConsoleText(false);
                    setTimeout(() => { router.push("/about"); }, 200)
                }
            }, 50);

            return () => {
                clearInterval(timer);
            };
        }

    }, [activeConsoleText, count, props.text]);

    useEffect(() => {
        if (props.text !== "") {
            setActiveConsoleText(true);
        }
    }, [props.text]);

    return (
        <div style={styles.container}>
            <div>
                <p style={styles.text}>{"PS C:/users/dev> "} {consoleText}</p>
            </div>
        </div>
    );
};

export default Console;