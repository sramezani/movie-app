import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../containers/Home';
import Category from '../containers/Category';
import Detail from '../containers/Detail';
import Favorite from '../containers/Favorite';
import Search from '../containers/Search';

import {Icon} from '../components';
import {Colors} from '../theme';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Detail" component={Detail} />
            <HomeStack.Screen name="Search" component={Search} />
        </HomeStack.Navigator>
    );
}

const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="Favorite" component={Favorite} />
            <FavoriteStack.Screen name="Detail" component={Detail} />
        </FavoriteStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused}) => <Icon name="home" size={20} color={focused ? Colors.primary : Colors.disable} />
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteStackScreen}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({focused}) => <Icon name="favorite" size={20} color={focused ? Colors.primary : Colors.disable} />
                }}
            />
        </Tab.Navigator>
    );
}
