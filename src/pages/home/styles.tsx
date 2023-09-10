import { StyleSheet } from "@/base/styles/style-sheet";
import { Theme } from "@/base/theme/app-theme";

export const styles = StyleSheet.create({
    container: {
        height: "100vh",
        width: "100%",
        background: Theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column"
    }
});