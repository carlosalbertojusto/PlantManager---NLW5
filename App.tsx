<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react"
import * as Notifications from "expo-notifications"
import AppLoading from "expo-app-loading"
import Routes from "./src/routes"
import { PlantProps } from "./src/libs/storage"

=======
import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import * as Notifications from 'expo-notifications'

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
<<<<<<< HEAD
} from "@expo-google-fonts/jost"
=======
} from "@expo-google-fonts/jost";
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
<<<<<<< HEAD
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      }
    )

    return () => subscription.remove()

    //  async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync()

    //   const data = await Notifications.getAllScheduledNotificationsAsync()
    //   console.log("########## Notificações Agendadas")
    //   console.log(data)

    // }
  }, [])

  if (!fontsLoaded) return <AppLoading />

  return <Routes />
=======
  });

  useEffect(()=>{
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      })

      return () => subscription.remove()

      //  async function notifications() {
      //   await Notifications.cancelAllScheduledNotificationsAsync() 
        
      //   const data = await Notifications.getAllScheduledNotificationsAsync()
      //   console.log("########## Notificações Agendadas")
      //   console.log(data)
        
        
      // } 
    
  },[])

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Routes />
  );
>>>>>>> 02b821a1a49b6801d9d8e0e3a6a24ed68ce653a9
}
