import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBillAmount } from "../redux/BillAction";

const BillTotalComponent = () => {
  const dispatch = useDispatch();
  const { billAmount } = useSelector((state) => state);
  const handleBillInputChange = (text) => dispatch(setBillAmount(text));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter bill total</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={billAmount}
        onChangeText={handleBillInputChange}
        placeholder="$ 0.00"
      />
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
    marginLeft: "20%",
    fontWeight: "600",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    fontSize: 32,
    fontWeight: "600",
    color: "#4CAF50", 
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    width: 200,
  },
});

export default BillTotalComponent;
