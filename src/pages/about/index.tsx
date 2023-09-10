import Container from "./components/container";
import styles from "./styles";
import { data } from "@/data/data";
import CustomCursor from '@/components/cursor'
import React from 'react';

const AboutMe = () => {
    return (
        <div style={styles.container}>
            <Container content={data?.content ?? ""} title="About me"></Container>
            <CustomCursor />
        </div>
    );
}

export default AboutMe;