First React Native Project

https://www.youtube.com/watch?v=qSRrxpdMpVc 3:10:50
npm install expo-cli --global
expo init "Name of app"
install android studio, install sdk in sdk manager, install virtual machine in avd manager. download playstore and android OS, First boot is usually the longest.
open android emulator, VSCode npm start then click the run on android or ios on expo webpage.
Debug in android ctrl + m, Debug in IOS command + d
React native debugger go to release page. https://github.com/jhen0409/react-native-debugger
Android Ctrl + t === IOS Command + t (React Native Debugger)

npm install -g expo-cli
npm i --package-lock-only

use safe install "expo install" kapag may error using npm install

1. expo init "Name of file"
2. npm install --save expo-font
3. npm install --save react-navigation (react-navigation.org)
4. expo install react-native-gesture-handler react-native-reanimated
5. npm install --save react-navigation-stack
   import { createStackNavigator } from 'react-navigation-stack';
   npm install --save react-navigation-tabs
   import { createTabsNavigator } from 'react-navigation-tabs';
   npm install --save react-navigation-drawer
   import { createDrawerNavigator } from 'react-navigation-drawer';
6. npm install --save react-native-screens
   import { useScreens } from 'react-native-screens'
7. npm install --save react-navigation-header-buttons
8. npm install --save @expo/vector-icons
9. npm install --save react-navigation-material-bottom-tabs

watch new circle-cli https://www.youtube.com/watch?v=Qp-BA9e0TnA&feature=youtu.be
