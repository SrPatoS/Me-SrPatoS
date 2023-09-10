import React from 'react';

interface Styles {
    [key: string]: React.CSSProperties;
}

export const StyleSheet = {
    create: <T extends Styles>(styles: T): T => {
        return styles;
    },
}