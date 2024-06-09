import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Calculator = () => {
  const {
    container,
    outputDisplayStyle,
    resultInputStyle,
    buttonGroupStyle,
    btnStyle,
    textInputStyle,
  } = styles;
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const handleNumInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleUndo = () => {
    let undoStr = displayValue.slice(0, displayValue.length - 1);
    setDisplayValue(undoStr);
  };

  const handleOperator = op => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  const handleEqualTo = () => {
    let operand1 = parseFloat(firstValue);
    let operand2 = parseFloat(displayValue);
    switch (operator) {
      case '/':
        setDisplayValue((operand1 / operand2).toString());
        break;
      case '*':
        setDisplayValue((operand1 * operand2).toString());
        break;
      case '+':
        setDisplayValue((operand1 + operand2).toString());
        break;
      case '-':
        setDisplayValue((operand1 - operand2).toString());
        break;
    }
    setFirstValue('');
    setOperator(null);
  };
  return (
    <View style={container}>
      <Text style={textInputStyle}>Basic Calculator</Text>
      {firstValue && displayValue && operator && (
        <Text style={textInputStyle}>
          {firstValue} {operator} {displayValue}
        </Text>
      )}
      <View style={outputDisplayStyle}>
        <Text style={resultInputStyle}>{displayValue}</Text>
      </View>
      <View style={buttonGroupStyle}>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(7)}>
          <Text style={textInputStyle}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(8)}>
          <Text style={textInputStyle}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(9)}>
          <Text style={textInputStyle}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleOperator('/')}>
          <Text style={textInputStyle}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(4)}>
          <Text style={textInputStyle}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(5)}>
          <Text style={textInputStyle}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(6)}>
          <Text style={textInputStyle}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleOperator('*')}>
          <Text style={textInputStyle}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(1)}>
          <Text style={textInputStyle}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(2)}>
          <Text style={textInputStyle}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(3)}>
          <Text style={textInputStyle}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleOperator('+')}>
          <Text style={textInputStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={handleUndo}>
          <Text style={textInputStyle}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleNumInput(0)}>
          <Text style={textInputStyle}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={() => handleOperator('-')}>
          <Text style={textInputStyle}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle} onPress={handleEqualTo}>
          <Text style={textInputStyle}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  outputDisplayStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 5,
    overflow: 'visible',
  },
  resultInputStyle: {
    fontSize: 50,
    color: '#543310',
    padding: 5,
  },
  buttonGroupStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 5,
    paddingVertical: 5,
    marginTop: 5,
    backgroundColor: '#74512D',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: 500,
  },
  btnStyle: {
    borderRadius: 30,
    padding: 20,
    margin: 5,
    marginVertical: 9,
    width: '22%',
    backgroundColor: '#F8F4F1',
  },
  textInputStyle: {
    fontSize: 32,
    textAlign: 'center',
    color: '#543310',
  },
});
