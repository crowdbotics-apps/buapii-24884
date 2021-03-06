import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Additem212379Navigator from '../features/Additem212379/navigator';
import Maps212375Navigator from '../features/Maps212375/navigator';
import UserProfile212371Navigator from '../features/UserProfile212371/navigator';
import Settings212348Navigator from '../features/Settings212348/navigator';
import UserProfile212341Navigator from '../features/UserProfile212341/navigator';
import Settings212338Navigator from '../features/Settings212338/navigator';
import SignIn2212336Navigator from '../features/SignIn2212336/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Additem212379: { screen: Additem212379Navigator },
Maps212375: { screen: Maps212375Navigator },
UserProfile212371: { screen: UserProfile212371Navigator },
Settings212348: { screen: Settings212348Navigator },
UserProfile212341: { screen: UserProfile212341Navigator },
Settings212338: { screen: Settings212338Navigator },
SignIn2212336: { screen: SignIn2212336Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
