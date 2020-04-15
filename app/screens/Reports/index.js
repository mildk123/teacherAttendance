import React from 'react';
import Reports from "./Reports";

import { createStackNavigator } from 'react-navigation-stack';
import { TouchableNativeFeedback } from 'react-native';

import { Icon, Badge } from 'native-base';

import { TextStyles, IconStyles } from '../../modules/styleSheet';
import Colors from '../../modules/Colors';

export default ReportsStackNav = createStackNavigator({
    Reports: {
        screen: Reports,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Reports',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
                        <Icon
                            type="Feather"
                            style={IconStyles.headerIconleft}
                            name="align-left"
                        />
                    </TouchableNativeFeedback>
                ),
            };
        },
    }
});