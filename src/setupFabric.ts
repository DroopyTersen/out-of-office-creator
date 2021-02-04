import "./styles.css";
import { getTheme } from "@uifabric/styling";
import { initializeIcons } from "@uifabric/icons";
import {
  DefaultButton,
  PrimaryButton,
  ChoiceGroup,
  Slider,
  DatePicker,
  Panel,
  PanelType,
  loadTheme,
  Fabric
} from "office-ui-fabric-react";

loadTheme({
  palette: {
    themePrimary: "#43a0ff",
    themeLighterAlt: "#03060a",
    themeLighter: "#0b1a29",
    themeLight: "#14304d",
    themeTertiary: "#286099",
    themeSecondary: "#3b8de0",
    themeDarkAlt: "#56aaff",
    themeDark: "#70b7ff",
    themeDarker: "#96caff",
    neutralLighterAlt: "#3c4553",
    neutralLighter: "#424b5a",
    neutralLight: "#4d5665",
    neutralQuaternaryAlt: "#535c6c",
    neutralQuaternary: "#596272",
    neutralTertiaryAlt: "#707a8a",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#363e4b"
  }
});

export const theme = getTheme();

initializeIcons();
