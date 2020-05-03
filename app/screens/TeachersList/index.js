import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { Icon, Badge } from 'native-base';
import { TextStyles, IconStyles } from '../../modules/styleSheet';
import Colors from '../../modules/Colors';

import TeachersList from './TeachersList';
import ViewDetails from './ViewDetails';

export default TeachersListStackNav = createStackNavigator({
    TeacherList: {
        screen: TeachersList,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Teachers List',
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
    },
    ViewDetails: {
        screen: ViewDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Information',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.pop()}>
                        <Icon
                            type="Feather"
                            style={IconStyles.headerIconleft}
                            name="arrow-left"
                        />
                    </TouchableNativeFeedback>
                ),
            };
        },
    }
});