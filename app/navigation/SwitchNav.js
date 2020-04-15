import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Authentication from "../screens/Authentication/Authentication";
import AppDrawerNav from "./AppDrawerNav";

const AppNavigator = createSwitchNavigator({
  Authentication: {
    screen: Authentication
  },
  App: {
    screen: AppDrawerNav
  }
});

export default createAppContainer(AppNavigator)
