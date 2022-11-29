import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Logo from '../asset/image4.png'
import Tanggal from '../asset/Group49.png'
import { useNavigation } from '@react-navigation/native'


const Notifications = () => {
const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Notifications
                </Text> 
            </View>
            <ScrollView style={{backgroundColor:'#FFFFFF'}}>
            <View style={styles.jalan}>
                
                <Text style={styles.text2}>
                    My Appointment
                </Text>
               
            </View>
            
              <TouchableOpacity>
            <View style={styles.container4}>
                <Image source={Tanggal} style={styles.tanggal} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    12:00-15:00 Siang
                    </Text>
            </View></TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.container4}>
                <Image source={Tanggal} style={styles.tanggal} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    12:00-15:00 Siang
                    </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.container4}>
                <Image source={Tanggal} style={styles.tanggal} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    12:00-15:00 Siang
                    </Text>
            </View>
            </TouchableOpacity>

            <View style={styles.jalan1}>
                
                <Text style={styles.text2}>
                    History
                </Text>
               
            </View>
                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate('DetailPage')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Again
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('DetailPage')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Again
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('DetailPage')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Again
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate('DetailPage')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Again
                    </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.container2}>
                <Image source={Logo} style={styles.logo} />
                    <Text style={styles.textcontainer2}>
                    Batam
                    </Text>
                    <Text style={styles.text1container2}>
                    Klinik Kehewanan
                    </Text>
                    <Text style={styles.text2container2}>
                    Buka: 09.00 - 20.00
                    </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('DetailPage')}
                    style={styles.buttoncontainer2}>
                    <Text
                        style={styles.buttontextcontainer2}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>

               
            </ScrollView>
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1A3150',
        paddingHorizontal: 25,
        paddingTop: 20,
    },
    touch: {
        flexDirection:'row',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 25,
        paddingTop: 10,
        marginHorizontal:20,
        alignSelf:'center',
        fontWeight: 'bold',
    },
    text2: {
        marginTop:35,
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        fontFamily :"Roboto",
    },
    jalan:{
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 25,
    },
    jalan1:{
      paddingHorizontal: 25,
      backgroundColor:'#FFFFFF',
      flexDirection: 'row',
      paddingBottom: 30,
  },
    container2: {
        marginHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        elevation:5,
        marginBottom:14,
        bottom:35,marginTop:10
    },
    container3: {
        paddingHorizontal: 25,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        paddingBottom: 15,
        
    },
    input:{
        width: 310,
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 55, 
    },
    textcontainer2: {
        fontSize: 15,
        color: '#875C25',
        marginStart: 5,
        marginTop: 5,
        marginLeft: 15,
    },
    text1container2: {
        fontSize: 17,
        color: '#000',
        right: 48,
        marginTop: 23,
        fontWeight: 'bold',
        marginLeft: 0,
    },
    text2container2: {
        fontSize: 15,
        color: '#1A3150',
        right: 182,
        marginTop: 45,
        fontWeight: 'bold',
        marginLeft:1
    },
    buttoncontainer2: {
        backgroundColor: '#FDCB5A',
        color: '#000',
        marginTop: 35,
        borderRadius: 3,
        position: 'absolute',
        right: 15,
        width: 155,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
    },
    buttontextcontainer2: {
        color: '#000',
        fontSize: 14,
        marginHorizontal: 20,
    },
    logo: {
        width: 124,
        height: 123,
        resizeMode: 'cover',
    },
    tanggal: {
      width: 83,
      height: 82,
      resizeMode: 'cover',
  },
  container4: {
    marginHorizontal: 25,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    elevation:5,
    marginBottom:14,
    bottom:25,marginTop:10,
    height: 80,
},
})

export default Notifications