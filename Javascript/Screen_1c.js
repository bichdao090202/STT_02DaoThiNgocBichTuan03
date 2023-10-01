import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import React from "react";

export default function Screen_1b() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.superBigText}>CODE</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.bigText}>
          VERIFICATION
        </Text>
      </View>
      <View style={styles.view3}>
          <Text style={styles.smallText}>
            Enter ontime password sent on ++849092605798
          </Text>
      </View>

      <View style={styles.view4}>
        <TextInput style={styles.cellInput}></TextInput>
        <TextInput style={styles.cellInput}></TextInput>
        <TextInput style={styles.cellInput}></TextInput>
        <TextInput style={styles.cellInput}></TextInput>
        <TextInput style={styles.cellInput}></TextInput>
        <TextInput style={styles.cellInput}></TextInput>
      </View>

      <View style={styles.view5}>
      <TouchableOpacity>
          <View style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #C7F4F6 50%,#D1F4F6 60%,#E5F4F5 85%, #00CCF9 102%)',
    alignItems: 'center',
  },
  view1:{
    height: 250,
    top: 100,
    alignItems: 'center',
  },
  view2:{
    top: 0,
    height: 80,
    alignItems: 'center',
  },
  view3:{
    top: 0,
  },
  view4:{
    top: 30,
    flexDirection: 'row',
    width: 320,
    },
  view5:{
    top:35,
    height: 100,
  },
  icon:{
    alignItems: 'center',
    },
  bigText:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  smallText:{
    fontSize: 17,
    fontWeight: 700,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
  }, 
  superBigText:{
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: 'rgb(224,203,66)',
    height: 48, 
    width: 320 ,
    margin: 30,
  }, 
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
    cellInput:{
        height: 50,
        width: 50,
        borderWidth: 1,
        textAlign: "center",
        fontSize: 30,
    }
});

