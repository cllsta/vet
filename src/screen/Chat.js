import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import  {useNavigation}  from  '@react-navigation/native' ;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Chat = () => {
  const navigation = useNavigation () ;
  return (
    <View>
    <View style={{backgroundColor: '#1A3150', height: 80}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 5,
            marginTop: 35,
            marginStart: 5,
            fontSize: 12,
          }} onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 20,
            color: 'white',
            marginHorizontal: 25,
            bottom: 26,
            marginLeft: 40,
            marginStart: 30,
            fontStyle: 'normal',
          }}>
          {' '}
          Sebelumnya
        </Text>
      </View>
    <TextInput
     style={styles.input}
      placeholder="Enter your Username"
      placeholderTextColor="#000">

    </TextInput>
    <Icon style={styles.send} name="send" size={20} color="#F1F1F1" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    backgroundColor: ' #F1F1F1',
    borderRadius: 4,
    borderColor: '#CACACA',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: 'roboto',
    fontSize: 12,
    height: 41,
    width: 312,
    left: 25,
    top: 569,
  },
  send:{

    borderRadius: 4,
    position: 'absolute',
    right: 60,
    bottom: -550,
  }
})

export default Chat