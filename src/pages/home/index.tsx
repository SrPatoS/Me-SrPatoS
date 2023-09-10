import React, { useState } from "react";
import { styles } from "./styles";
import { Container } from "./components/container";
import { Console } from "./components/console";
import { data } from "@/data/data";
import CustomCursor from '@/components/cursor'

const Home = () => {
    const [consoleText, setConsoleText] = useState<string>("");

    const onConsoleStart = () => {
        setConsoleText("npm run start:dev")
    }

    return (
        <div style={styles.container}>
            <Container
                onStart={onConsoleStart}
                title={data.name}
                subTitle={data.description}
            />
            <Console text={consoleText}></Console>
            <CustomCursor/>
        </div>
    );
};

export default Home;