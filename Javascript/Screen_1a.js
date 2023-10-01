import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
// import WebLinearGradient from 'react-native-web-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';

export default function Screen_1a() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon name="circle-o" size={160} style={styles.icon} />
      </View>

      <View style={styles.view2}>
        <Text style={styles.bigText}>
          GROW
        </Text>
        <Text style={styles.bigText}>
          YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.view3}>
          <Text style={styles.smallText}>
            We will help you to grow your business using online server
          </Text>
      </View>
      <View style={styles.view4}>
       <TouchableOpacity>
          <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view5}>
        <Text style={styles.nomalText}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #C7F4F6 50%,#D1F4F6 60%,#E5F4F5 85%, #00CCF9 102%)',
    // backgroundImage: 'linear-gradient(to bottom, rgba(199, 244, 246, 1) 70%,rgba(229, 244, 245, 1) 50%,rgba(0, 204, 249, 1) 90%)',
    alignItems: 'center',
  },
  view1:{
    height: 250,
    top: 70,
    alignItems: 'center',
  },
  view2:{
    top: 20,
    height: 100,
    alignItems: 'center',
  },
  view3:{
    top: 50,
  },
  view4:{
    top: 60,
    flexDirection: 'row',
    },
  view5:{
    top:50,
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
    borderRadius: 10,
    backgroundColor: 'rgb(224,203,66)',
    height: 48, 
    width: 120,
    margin: 30,
  }, 
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  }
});

