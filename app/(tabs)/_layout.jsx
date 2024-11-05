import {View,Text,StyleSheet} from 'react-native'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { responsiveFontSize,responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import MaterialProIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { Icon } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import socketService from '../socketService/socketService';
import { useEffect } from 'react';
export default function Layout(){

  useEffect(()=>{
    socketService.connect("http://192.168.108.162:8000/")

    const socket = socketService.getSocket()

   
    return ()=>{
      socketService.disconnect()
    }
  },[])




    return <>
    <StatusBar style='dark'/>
    <Tabs screenOptions={{
            headerTitle:()=><Text style={styles.logoPartOne}>Code<Text style={styles.logoPartTwo}>Labs</Text></Text>,
            headerRight:()=><Logo/>,
            tabBarShowLabel:false,
            tabBarActiveTintColor:"#09334E"
        }} >


        <Tabs.Screen name='index'
        
        
        
        options={{
            tabBarIcon:({size,color,focused})=><Ionicons
            name="home"
            color={color}
            size={size}
            style={{
                paddingHorizontal:15,
                backgroundColor:focused?"#b9d2e7":null,paddingVertical:3,borderRadius:20
            }}
          />
        }}
        
        />


        <Tabs.Screen name='Shorts'
        
        
        options={{
            tabBarIcon:({size,color,focused})=> <Entypo
            name="folder-video"
            color={color}
            size={size}
            style={{
                paddingHorizontal:15,
                backgroundColor:focused?"#b9d2e7":null,paddingVertical:3,borderRadius:20
            }}
          />,
          
        }}
        
        
        />




        
    <Tabs.Screen name='Posts'
        
        options={{
            tabBarIcon:({size,color,focused})=><FontAwesome6
            name="plus"
            color={color}
            style={{
                paddingHorizontal:15,
                backgroundColor:focused?"#b9d2e7":"#DDD",paddingVertical:3,borderRadius:100
            }}
            size={size+4}
          />
          
        }}
        
        />





        <Tabs.Screen name='Library'
        
        
        options={{
            tabBarIcon:({size,color,focused})=> <Entypo
            name="folder"
            color={color}
            size={size}
            style={{
                paddingHorizontal:15,
                backgroundColor:focused?"#b9d2e7":null,paddingVertical:3,borderRadius:20
            }}
          />
        }}
        
        />






        <Tabs.Screen name='Profile'
         options={{
            tabBarIcon:({size,color,focused})=> <MaterialProIcons
            name="shield-account"
            color={color}
            size={size+3}
            style={{
                paddingHorizontal:15,
                backgroundColor:focused?"#b9d2e7":null,paddingVertical:3,borderRadius:20
            }}
          />
        }}
        />
        



    </Tabs>
    </>
}



const styles = new StyleSheet.create({
    logoPartOne:{
        fontSize:responsiveFontSize(2.8),
        fontWeight:"bold"
    },
    logoPartTwo:{
        fontSize:responsiveFontSize(2.8),
        fontWeight:"bold",
        color:"#648DDB"
    }
})


const Logo = function (){
    return <>
 
    <View style={{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:responsiveScreenWidth(6),
        paddingRight:responsiveScreenWidth(4)
        
        }}>
            <TouchableOpacity>
              <Icon
                source="information"
                color={"#09334E"}
                size={responsiveScreenHeight(3.3)}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                source="facebook-messenger"
                color={"#09334E"}
                size={responsiveScreenHeight(3.3)}
              />
            </TouchableOpacity>
          </View>
    </>
}