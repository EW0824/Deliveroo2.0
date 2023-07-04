import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iteractionCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iteractionCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to {"\n"} accept your order!
      </Animatable.Text>

      <Progress.Bar width={300} indeterminate={true} color={"white"} />
    </View>
  );
};

export default PreparingOrderScreen;
