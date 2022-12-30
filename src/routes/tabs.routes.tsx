<<<<<<< HEAD
import React from "react"
import { Platform } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { MyPlants } from "../pages/MyPlants"
import { PlantSelect } from "../pages/PlantSelect"

import { MaterialIcons } from "@expo/vector-icons"
import colors from "../styles/colors"
=======
import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'


import { MyPlants } from '../pages/MyPlants'
import { PlantSelect } from '../pages/PlantSelect'

import { MaterialIcons } from '@expo/vector-icons'
import colors from '../styles/colors'
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
<<<<<<< HEAD
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: [
          {
            paddingVertical: Platform.OS === "ios" ? 20 : 0,
            height: 88,
          },
          null,
        ],
      }}
    >
      <AppTab.Screen
        name={"Nova Planta"}
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name={"Minhas Plantas"}
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
=======
  return(
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style:{
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88
        },

      }}>
          <AppTab.Screen 
            name={"Nova Planta"}
            component={PlantSelect}
            options={{
              tabBarIcon:(({ size, color }) =>(
                <MaterialIcons 
                name="add-circle-outline"
                size={size}
                color={color}
                />
              ))
            }}
          />
          <AppTab.Screen 
            name={"Minhas Plantas"}
            component={MyPlants}
            options={{
              tabBarIcon:(({ size, color }) =>(
                <MaterialIcons 
                name="format-list-bulleted"
                size={size}
                color={color}
                />
              ))
            }}
          />
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9
    </AppTab.Navigator>
  )
}

<<<<<<< HEAD
export default AuthRoutes
=======

export default AuthRoutes
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9
