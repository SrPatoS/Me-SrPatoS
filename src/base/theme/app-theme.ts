import { ITheme } from "./theme.interface"
import { dark } from "./themes"

export class Theme {
    public static colors: ITheme = dark;

    public static changeTheme(theme: ITheme) {
        this.colors = theme;
    }
}