import { styles } from "./styles";
import { Button } from "../button";
import { data } from "@/data/data";

interface Props {
    title: string,
    content: string,
}

export const Container = (props: Props) => {

    const onGithub = () => {
        window.open(data.githubPage, "_blank")
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{props.title}</h1>
            <p style={styles.content}>{props.content}</p>
            <Button onClick={onGithub}></Button>
        </div>
    );
}