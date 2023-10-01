import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FirstScreen() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00CCF9',
    alignItems: 'center',
  },
  view1:{
    height: 300,
    top: 105,
    alignItems: 'center',
  },
  view2:{
    top: 10,
    alignItems: 'center',
  },
  view3:{
    top: 50,
  },
  view4:{
    top: 80,
    flexDirection: 'row',
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

