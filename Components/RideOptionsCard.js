import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
const data = [
  {
    id: "uber-1",
    title: "uber 1",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber-2",
    title: "uber 2",
    multiplier: 3,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-3",
    title: "uber 3",
    multiplier: 4,
    image: "https://links.papareact.com/7pf",
  },
];
// If we Surge pricing , this goes up
// 如果我們提高定價，這會上漲
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const TravelTimeInformation = useSelector(selectTravelTimeInformation);
  const navigation = useNavigation();
  const [select, setSelect] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-lg`}>
        Select a Ride - {TravelTimeInformation?.distance.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, image, multiplier }, item }) => (
          <TouchableOpacity
            onPress={() => setSelect(item)}
            style={tw`flex-row items-center justify-between px-4 ${
              id === select?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>{TravelTimeInformation?.duration?.text} Travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("TWD", {
                style: "currency",
                currency: "TWD",
              }).format(
                (TravelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        {/* disabled = 禁用 */}
        <TouchableOpacity
          disabled={!select}
          style={tw`bg-black py-2 m-3 ${!select && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {select?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
