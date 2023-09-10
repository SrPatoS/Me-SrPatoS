import { StyleSheet } from "@/base/styles/style-sheet";
import { useState } from 'react';
import { Theme } from "@/base/theme/app-theme";

interface Props {
    title: string,
    onClick: () => void;
}

const Button = (props: Props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const styles = StyleSheet.create({
        container: {
            height: 35,
            width: 100,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 15,
            borderRadius: 10,
            background: isHovered ? Theme.colors.primary : Theme.colors.background,
            borderColor: Theme.colors.primary,
            borderWidth: "1px",
            borderStyle: "solid",
            justifyContent: "center",
        },
        title: {
            fontFamily: "Urbanist-Bold",
            fontSize: 20,
            color: isHovered ? Theme.colors.background : Theme.colors.font
        }
    });

    const onClick = () => {
        props.onClick();
    }

    const onMouseEnter = () => {
        setIsHovered(true);
    }

    const onMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div style={styles.container}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <p style={styles.title}>{props.title}</p>
        </div>
    );
}

export default Button;