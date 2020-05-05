import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import {uuid} from 'react-native-uuid';

function App() {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  onclick = (id) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id != id);
    });
  };

  addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter some text',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      console.log('there was a click');
      let n = items.length + 1;
      setItems((prevItems) => {
        return [...prevItems, {id: n, text}];
      });
    }
  };

  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     height: 100,
    //     padding: 20,
    //   }}>
    //   <View style={{backgroundColor: 'blue', flex: 0.3}} />
    //   <View style={{backgroundColor: 'red', flex: 0.5}} />
    //   <View style={{backgroundColor: 'orange', flex: 0.2}} />
    // </View>

    <View style={styles.container}>
      <Header headerText={'Application Header'} />
      <AddItem onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} onPress={() => onclick(item.id)} />
        )}
      />
      {/* <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // text: {fontSize: 30, color: 'darkslateblue'},
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50
  // },
});

export default App;
