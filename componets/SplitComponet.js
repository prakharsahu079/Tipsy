import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { setSplitCount } from "../redux/BillAction";
import { useDispatch, useSelector } from "react-redux";

const SplitComponent = () => {
  const dispatch = useDispatch();
  const { splitCount } = useSelector((state) => state);
  const handleIncrement = () => {
    const count = splitCount + 1;
    dispatch(setSplitCount(count));
  };
  const handledecrement = () => {
    if (splitCount > 1) {
      const count = splitCount - 1;
      dispatch(setSplitCount(count));
    } else {
      const count = 1;
      dispatch(setSplitCount(count));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Split</Text>
      <View style={styles.splitContainer}>
        <TouchableOpacity onPress={handledecrement}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.splitValue}>{splitCount}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 22,
    color: "#A0A0A0",
    marginLeft: "21%",
    fontWeight: "600",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  splitContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 28,
    color: "#4CAF50", 
    paddingHorizontal: 20,
  },
  splitValue: {
    fontSize: 28,
    fontWeight: "600",
    color: "#4CAF50", 
  },
});

export default SplitComponent;
