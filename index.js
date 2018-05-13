import { AppRegistry } from "react-native";

// Unfixed code bug migration from RN itself (not React-navigation), expected to be fix in few weeks, https://github.com/facebook/react-native/issues/18868
// temp work around add YellowBox ignoreWarnings
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

import App from "./app/App";

AppRegistry.registerComponent("Brainpick", () => App);
