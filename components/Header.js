import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Header({headerText}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
}

Header.defaultProps = {
  headerText: 'Some Default Header',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
