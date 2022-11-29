import { View, Text,TouchableOpacity,StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Messanger = () => {
  const navigation = useNavigation () ;
  return (
    <View style={styles.container}>
    <View style={{backgroundColor: '#1A3150', height: 80,alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 20,
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        Messanger
      </Text>
    </View>
    <TouchableOpacity>
    <View style={styles.container1}>
      <Image source={require('../asset/image4.png')} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.name} onPress={() => navigation.navigate('ChatScreen')}>RS Kalimanjoro</Text>
        <Text style={styles.subTitle}> 1 hr</Text>
      </View>
      <Text style={styles.subTitle}>Halo kak, kamu dimana? Sudah bisa
ke klinik</Text>
    </View>
    
    </View>  
    </TouchableOpacity>
    <TouchableOpacity>
       <View style={styles.container1}>
      <Image source={require('../asset/image4.png')} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.name}>RS Kalimanjoro</Text>
        <Text style={styles.subTitle}> 1 hr</Text>
      </View>
      <Text style={styles.subTitle}>Halo kak, kamu dimana? Sudah bisa
ke klinik</Text>
    </View>
    
    </View>
    </TouchableOpacity>
   <TouchableOpacity>
      <View style={styles.container1}>
      <Image source={require('../asset/image4.png')} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.name}>RS Kalimanjoro</Text>
        <Text style={styles.subTitle}> 1 hr</Text>
      </View>
      <Text style={styles.subTitle}>Halo kak, kamu dimana? Sudah bisa
ke klinik</Text>
    </View>
    
    </View>
   </TouchableOpacity>
  <TouchableOpacity>
     <View style={styles.container1}>
      <Image source={require('../asset/image4.png')} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.row}>
        <Text style={styles.name}>RS Kalimanjoro</Text>
        <Text style={styles.subTitle}> 1 hr</Text>
      </View>
      <Text style={styles.subTitle}>Halo kak, kamu dimana? Sudah bisa
ke klinik</Text>
    </View>
    
    </View>
  </TouchableOpacity>
   
      
  
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 15,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    
  },
  content:{
   flex: 1,
   backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
 
  }, 
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
   marginTop: 5,
  },
  subTitle: {
    color:'#CACACA',
   marginHorizontal: 10,
   marginTop: 5,
  
  },
})
export default Messanger