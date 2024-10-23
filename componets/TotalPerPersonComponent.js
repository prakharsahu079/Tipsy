import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const TotalPerPersonComponent = () => {
  const { billAmount, tipPercentage ,splitCount} = useSelector((state) => state);

  const calculateTotalPerPerson = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * tipPercentage) / 100;
    const totalPerPerson = (bill + tip) / splitCount;
    return totalPerPerson.toFixed(2);
  };

 
  const calculateTipPerPerson = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * tipPercentage) / 100;
    const tipPerPerson= (tip / splitCount);
    return tipPerPerson.toFixed(2)
    
  };

  const calculateBill = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = (bill * tipPercentage) / 100;
    const billTotal= bill + tip;
    return billTotal.toFixed(2)
    
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total per person</Text>
      <Text style={styles.total}>{`$${calculateTotalPerPerson()}`}</Text>
      <View style={styles.breakdownContainer}>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownLabel}>bill</Text>
          <Text style={styles.breakdownValue}>{`$${calculateBill()}`}</Text>
        </View>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownLabel}>tip</Text>
          <Text style={styles.breakdownValue}>{`$${calculateTipPerPerson()}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cef5e4', 
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: "100%",
    height:"100%"
  },
  label: {
    fontSize: 22,
    color: '#A0A0A0',
    marginBottom: 10,
    fontWeight:"500"
  },
  total: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginBottom: 13,
  },
  breakdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  breakdown: {
    alignItems: 'center',
    width: '50%',
  },
  breakdownLabel: {
    fontSize: 22,
    color: '#A0A0A0',
    fontWeight:"400",
    marginBottom: 13,
  },
  breakdownValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 13,
  },
});

export default TotalPerPersonComponent;
