<<<<<<< HEAD
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { Welcome } from "../pages/Welcome"
import { UserIdentification } from "../pages/UserIdentification"
import { Confirmation } from "../pages/Confirmation"
import { PlantSave } from "../pages/PlantSave"
import AuthRoutes from "./tabs.routes"

import colors from "../styles/colors"
=======
import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentification'
import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import AuthRoutes from './tabs.routes'




import colors from '../styles/colors'
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
<<<<<<< HEAD
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
)

export default AppRoutes
=======
    headerMode="none"
    screenOptions={{
        cardStyle:{
          backgroundColor: colors.white
        },
    }}
  >
    <stackRoutes.Screen 
        name="Welcome"
        component={Welcome}
    />

     <stackRoutes.Screen 
        name="UserIdentification"
        component={UserIdentification}
    />

    <stackRoutes.Screen 
        name="Confirmation"
        component={Confirmation}
    />
    <stackRoutes.Screen 
        name="PlantSelect"
        component={AuthRoutes}
    />
    <stackRoutes.Screen 
        name="PlantSave"
        component={PlantSave}
    />
    <stackRoutes.Screen 
        name="MyPlants"
        component={AuthRoutes}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9
