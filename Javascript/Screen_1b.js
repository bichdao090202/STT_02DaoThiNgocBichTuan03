import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import React from "react";

export default function Screen_1b() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon name="locked" size={160} style={styles.icon} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.bigText}>
          FORGET
        </Text>
        <Text style={styles.bigText}>
          PASSWORD
        </Text>
      </View>
      <View style={styles.view3}>
          <Text style={styles.smallText}>
            Provide your account's email for which you want to reset your password
          </Text>
      </View>

      <View style={styles.view4}>
      <Icon name="email" size={25} style={styles.InputIcon} />
       <TextInput style={styles.textInput} placeholder="Email">
        
       </TextInput>
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
    top: 60,
    alignItems: 'center',
  },
  view2:{
    top: 0,
    height: 100,
    alignItems: 'center',
  },
  view3:{
    top: 0,
  },
  view4:{
    top: 30,
    flexDirection: 'row',
    backgroundColor: "#C4C4C4",
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallText:{
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
  }, 
  nomalText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
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
    textInput:{
        height: "48px",
        width: 320,
        fontWeight: 'bold',
    },
    InputIcon:{
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15,
    }
});

