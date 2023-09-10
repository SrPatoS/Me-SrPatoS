import { StyleSheet } from "@/base/styles/style-sheet";
import { Theme } from "@/base/theme/app-theme";

export const styles = StyleSheet.create({
    container: {
        background: Theme.colors.background,
        display: "flex",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});