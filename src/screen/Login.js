import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput, 
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text></Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Icon name="arrow-left" size={25} color="white" />

        <Text
          onPress={() => navigation.goBack()}
          style={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Sebelumnya
        </Text>
      </View>
      <View style={styles.container1}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {' '}
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            color: 'white',
            paddingTop: 15,
            paddingBottom: 10,
          }}>
          Username
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Username"
          placeholderTextColor="white"
        />
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            color: 'white',
            paddingTop: 15,
            paddingBottom: 10,
          }}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="white"
        />
        
        <MaterialCommunityIcons
          style={{
            position: 'absolute',
            right: 20,
            top: 195,
          }}
          name="eye"
          size={20}
          color="white"
        />
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#FDCB5A',
            textAlign: 'right',
            textDecorationLine: 'underline',
          }}>
          Forgot your password
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('DashboardScreen')}>
          <Text 
            style={styles.textlogin}> Submit
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {' '}
          Don't have an account? Please
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              fontSize: 16,
              color: '#FDCB5A',
              textAlign: 'right',
              textDecorationLine: 'underline',
            }}>
            {' '}
            Sign Up{' '}
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
    padding: 20,
    justifyContent: 'flex-start',
  },
  container1: {
    flex: 1,
    backgroundColor: '#1A3150',
    marginTop: 55,
    padding: 10,
  },
  input: {
    borderColor: '#749DD2',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: 'roboto',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#FDCB5A',
    color: '#000',
    marginTop: 35,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'roboto',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  textlogin: {
    color: '#1A3150',
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Login