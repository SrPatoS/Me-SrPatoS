import { styles } from "./styles";
import { Button } from "../button";

interface Props {
    title: string,
    subTitle: string,
    onStart: () => void;
}

export const Container = (props: Props) => {
    const onStart = () => {
        props.onStart();
    }

    return (
        <div style={styles.container}>
            <h1  style={styles.headerTitle}>{props.title}</h1>
            <p style={styles.subTitle}>{props.subTitle}</p>
            <Button onClick={onStart} title="Start"></Button>
        </div>
    );
}