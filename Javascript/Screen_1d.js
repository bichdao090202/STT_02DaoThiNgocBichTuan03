import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Screen_1d() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.bigText}>LOGIN</Text>
      </View>

      <View style={styles.view2}>
        <TextInput style={styles.textInput} placeholder="Email"></TextInput>
      </View>

      <View style={styles.view2}>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
        <Icon name="eye" size={25} style={styles.InputIcon} />
      </View>

      <View style={styles.view3}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.view4}>
        <Text style={styles.smallText}>When you agree to terms and conditions</Text>
        <Text style={styles.link}>Forgot your password?</Text>
        <Text style={styles.smallText}>Or login with </Text>
      </View>

      <View style={styles.view5}>
        <TouchableOpacity style={styles.fbBackground}>
          <EvilIcons name="sc-facebook" size={40} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.zaloBackground}>
          <Text style={styles.zalo}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ggBackground}>
          <Text style={styles.google}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(215,239,222)',
    alignItems: 'center',
  },
  view1: {
    height: 100,
    top: 60,
    alignItems: 'center',
  },
  view2: {
    top: 30,
    flexDirection: 'row',
    backgroundColor: 'rgb(201, 224, 208)',
    width: 360,
    marginTop: 30,
  },
  view3: {
    top: 50,
    height: 100,
  },
  view4: {
    top: 30,
    alignItems: 'center',
  },
  view5: {
    top: 80,
    borldercolor: 'blue',
    height: 48,
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 50,
    color: 'rgb(215,239,222)',
  },
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 15,
    marginTop: 20,
  },
  nomalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'rgb(196, 78, 60)',
    height: 48,
    width: 360,
    margin: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(215,239,222)',
    marginTop: 10,
  },
  textInput: {
    height: "48px",
    width: 320,
    fontWeight: '500',
    marginLeft: 30,
  },
  InputIcon: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
  fbBackground: {
    backgroundColor: 'rgb(56, 88, 152)',
    height: 45,
    width: 120,
    alignItems: 'center',
  },
  zaloBackground: {
    backgroundColor: 'rgb(21 147 197)',
    height: 45,
    width: 120,
    alignItems: 'center',
  },
  zalo: {
    color: 'rgb(215,239,222)',
    fontSize: 30,    
    fontWeight: 'bold',
  },
  ggBackground: {
    backgroundColor: 'rgb(215,239,222)',
    height: 45,
    width: 120,
    alignItems: 'center',
    borderColor:'rgb(21, 147, 197)',
    borderWidth: 1,   
  },
  google: {
    color: 'black',
    fontSize: 30,    
    fontWeight: 'bold',
  },

});

