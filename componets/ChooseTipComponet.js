import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTipPercentage } from "../redux/BillAction";

const TipSelector = ({ tipOptions = [5, 10, 15, 20, 25], onCustomTip }) => {
  const dispatch = useDispatch();
  const { tipPercentage } = useSelector((state) => state);

  const handleTipSelect = (tip) => {
    console.log(tip);
    dispatch(setTipPercentage(tip));
    if (onCustomTip) onCustomTip(tip); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose tip</Text>
      <View style={styles.chipContainer}>
        {tipOptions.map((tip) => (
          <TouchableOpacity
            key={tip}
            style={[
              styles.chip,
              tipPercentage === tip && styles.selectedChip, 
            ]}
            onPress={() => handleTipSelect(tip)}
          >
            <Text
              style={[
                styles.chipText,
                tipPercentage === tip && styles.selectedChipText, 
              ]}
            >
              {tip}%
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#A0A0A0",
    marginLeft: "14%",
    fontWeight: "600",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  chip: {
    backgroundColor: "#F3F4F6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  selectedChip: {
    backgroundColor: "#34D399", 
  },
  chipText: {
    color: "#6B7280",
    fontSize: 16,
  },
  selectedChipText: {
    color: "#FFF",
  },
});

export default TipSelector;
