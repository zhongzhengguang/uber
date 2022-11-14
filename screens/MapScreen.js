import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../Components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "../Components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const MapScreen = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  // Stack = 堆疊
  // Navigator = 導航
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-16 left-8 bg-gray-100 z-50 rounded-full shadow-lg p-3`}
      >
        <Icon name="home" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
