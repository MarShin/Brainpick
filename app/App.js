import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";
// import CameraInstructions from "./screens/CameraInstructions";
// import Settings from './screens/Settings';
import Me from "./screens/Me";
import { Root } from "./config/routes";

EStyleSheet.build({
  $darkBlue: "#142026",
  $regularBlue: "#22455B",
  $lightBlue: "#417690",
  $paleBlue: "#ADC7D4",
  $darkGreen: "#258E77",
  $regularGreen: "#45BFA3",
  $lightGreen: "#50E3C2",
  $darkOrange: "#F59223",
  $regularOrange: "#F5BC23",
  $lightOrange: "#FFCC2D",
  $darkGray: "#2C2C2C",
  $regularGray: "#565656",
  $lightGray: "#8C8C8C",
  $paleGray: "#C0C0C0",

  $white: "#FFFFFF",

  $border: "#979797",
  $inputText: "#797979",
  $outline: 1
});

// export default () => <CameraInstructions />;
// export default () => <Home />;
// export default () => <Me />;
export default () => <Root />;
