import { StyleSheet } from "@/base/styles/style-sheet";
import { Theme } from "@/base/theme/app-theme";

export const styles = StyleSheet.create({
    container: {
        height: 500,
        width: 500,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        fontFamily: "Urbanist-Medium",
        fontSize: 50
    },
    content: {
        color: Theme.colors.otherFont,
        fontFamily: "Urbanist-Medium",
        fontSize: 17,
        margin: 0,
        padding: 0,
        textAlign: "justify",
        width: "100%"
    }
});