import React from "react";
import { ImageBackground } from "react-native";
import styles from "./IAmRich.style";

const IAmRich = () => {
  return <ImageBackground source={require("../../../assets/i-am-rich.jpg")} style={styles.container}/>;
};

export default IAmRich;
