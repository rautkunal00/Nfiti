import React from 'react'
import { createDrawerNavigator} from "@react-navigation/drawer";

import HomeScreen from '../Screens/Home';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    );
  }

  export default MyDrawer