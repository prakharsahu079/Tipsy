import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import TipSelector from "../componets/ChooseTipComponet";
import BillTotalComponent from "../componets/BillComponet";
import SplitComponent from "../componets/SplitComponet";
import TotalPerPersonComponent from "../componets/TotalPerPersonComponent";

const DashBoardScreen = () => {
  return (
    <View style={styles.container}>
      {/* App Header */}
      <Text style={styles.header}>Tipsy</Text>

      <BillTotalComponent />
      <TipSelector />
      <SplitComponent />
      <TotalPerPersonComponent />
    </View>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E6F7F3",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#3DBDA7",
  },
});

export default DashBoardScreen;
