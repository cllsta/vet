import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from '../asset/Group1.png';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            backgroundColor: '#FDCB5A',
            color: '#fff',
            marginBottom: 5,
            padding: 10,
            top: 140,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              fontFamily: 'Roboto',
              color: '#875C25',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Registrasi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    top: -10,
    width: 280,
    height: 180,
    alignItems: 'center',
    marginBottom: 20,
  },
  container1: {
    width: '80%',
    height: 50,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    color: '#fff',
    marginBottom: 5,
    padding: 10,
    top : 150,
    borderRadius: 5,
    alignItems: 'center',
  },
  textLogin: {
    fontFamily: 'Roboto',
    color: '#1A3150',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default App;
