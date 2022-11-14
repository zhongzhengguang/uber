import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  // 可觸摸不透明度
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination:
      "Section 3, Minsheng East Road, Zhongshan District, Taipei, Taiwan",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination:
      "Taipei 101 Shopping center, Section 5th, Xinyi Road, Xinyi District, Taipei City, Taiwan",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-300 `, { height: 1 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg `}>{location} </Text>
            <Text style={tw`text-gray-500 `}>{destination} </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
