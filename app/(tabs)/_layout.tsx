import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="taxes"
        options={{
          title: "Impuestos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cash" : "cash-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="bikes"
        options={{
          title: "Bicicletas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bicycle" : "bicycle-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="parking"
        options={{
          title: "E.M.",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "car" : "car-outline"} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="alarm"
        options={{
          title: "Alarmas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "megaphone" : "megaphone-outline"}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="help"
        options={{
          title: "Ayuda",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "help-circle" : "help-circle-outline"}
              color={color}
            />
          )
        }}
      />

<Tabs.Screen
        name="requests"
        options={{
          title: "Quejas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "alert" : "alert-outline"}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
