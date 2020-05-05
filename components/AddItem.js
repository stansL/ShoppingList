import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';

function AddItem(props) {
  const [text, setText] = useState('');

  changeText = (textValue) => {
      setText(textValue);
  }
  return (
    <View style={styles.addView}>
      <TextInput
        style={styles.textStyle}
        onChangeText={text => changeText(text)}
        placeholder="Add Item..."
      />
      <Button
        style={styles.buttonStyle}
        title="Add Item"
        onPress={() => props.onPress(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addView: {
    flexDirection: 'row',
    height: 80,
    padding: 20,
    justifyContent: 'center',
  },
  textStyle: {borderColor: 'gray', borderWidth: 1, flex: 0.7},
  buttonStyle: {backgroundColor: 'blue', flex: 0.3},
});

export default AddItem;
