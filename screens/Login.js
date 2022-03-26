import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { images, COLORS, SIZES, FONTS } from "../constants";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={images.loginBackground1}
          style={styles.loginBackground}
        >
          <Text style={styles.textInLinearGradient}>
            Cooking a {"\n"}Delicious Food {"\n"}Easily
          </Text>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.linearGradient}
          ></LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food {"\n"} recipes in your hands and {"\n"}
          cooking it easily
        </Text>

        {/* Buttons */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* Login */}
          <CustomButton
            buttonText="Log in"
            buttonContainerStyle={{paddingVertical:18, borderRadius: 20}}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
          />

          {/* Sign Up */}
          <CustomButton
            buttonText="Sign up"
            buttonContainerStyle={{marginTop: 12, paddingVertical:18, borderRadius: 20, borderColor: COLORS.darkLime, borderWidth: 1}}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      {/* Header */}
      {renderHeader()}
      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  loginBackground: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  linearGradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  textInLinearGradient: {
    width: "70%",
    color: COLORS.white,
    ...FONTS.h1,
    lineHeight: 45,
    top: "-25%",
    left: "10%",
  },
});
export default Login;
