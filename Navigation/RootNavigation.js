import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MessageScreen from "../Screens/MessageScreen";
import Gallery from "../Screens/Gallery";

const RootNavigation = (props) => {
  const Drawer = createDrawerNavigator();
  const UserBottomTab = createBottomTabNavigator();

  const UserTabNavigation = () => {
    return (
      <UserBottomTab.Navigator
        screenOptions={({ route }) => ({
          title: route.name.toUpperCase(),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "account-group" : "account-group-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Messages") {
              iconName = focused
                ? "chat-processing"
                : "chat-processing-outline";
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#044b59",
          inactiveTintColor: "gray",
        }}
      >
        <UserBottomTab.Screen name="Home" component={Gallery} />
        <UserBottomTab.Screen name="Messages" component={MessageScreen} />
      </UserBottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={UserTabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
