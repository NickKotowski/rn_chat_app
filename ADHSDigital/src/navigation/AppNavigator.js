import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from '../screens/main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
  },
});

export default createAppContainer(AppNavigator);
