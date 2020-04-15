import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { Icon, Badge } from 'native-base';
import { TextStyles, IconStyles } from '../../modules/styleSheet';
import Colors from '../../modules/Colors';

import WeeklyStat from './WeeklyStat';

export default WeeklyStatStackNav = createStackNavigator({
    WeeklyStat: {
        screen: WeeklyStat,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Weekly Statistics',
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