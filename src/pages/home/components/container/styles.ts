import { StyleSheet } from "@/base/styles/style-sheet";
import { Theme } from "@/base/theme/app-theme";

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 500,
        display: "flex",
        //justifyContent: "center",
        alignItems: "center",
        //background: "#000",
        flexDirection: "column"
    },
    headerTitle: {
        fontFamily: "Urbanist-Medium",
        fontSize: 50,
        color: Theme.colors.font
    },
    subTitle: {
        fontFamily: "Urbanist-Light",
        fontSize: 20,
        color: Theme.colors.otherFont
    }
});

export default styles;