import { View, Text, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import MaterialProIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { Icon } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import socketService from "../socketService/socketService";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Layout() {
  

  useEffect(() => {
    socketService.connect("http://192.168.108.162:8000/");

    return () => {
      socketService.disconnect();
    };
  }, []);

 

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
         
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#09334E",
          tabBarStyle: {
            height: responsiveScreenHeight(7),
            paddingVertical: 5,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: () => (
              <Text style={styles.logoPartOne}>
                Code<Text style={styles.logoPartTwo}>Labs</Text>
              </Text>
            ),
            headerRight: () => <Logo />,
            tabBarIcon: ({ size, color, focused }) => (
              <Ionicons
                name="home"
                color={color}
                size={size}
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: focused ? "#b9d2e7" : null,
                  paddingVertical: 3,
                  borderRadius: 20,
                }}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(1.6),
                }}
              >
                Home
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="Shorts"
          options={{
           
            headerShown:false,
            tabBarIcon: ({ size, color, focused }) => (
              <Entypo
                name="folder-video"
                color={color}
                size={size}
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: focused ? "#b9d2e7" : null,
                  paddingVertical: 3,
                  borderRadius: 20,
                }}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(1.6),
                }}
              >
                Shorts
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="Posts"
          options={{
            headerTitle:()=><Text style={{fontSize:responsiveFontSize(2.9),fontWeight:"bold"}}><Text style={{color:"#648DDB"}}>Up</Text>load</Text>,
            tabBarIcon: ({ size, color, focused }) => (
              <FontAwesome6
                name="plus"
                color={color}
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: focused ? "#b9d2e7" : "#DDD",
                  paddingVertical: 3,
                  borderRadius: 100,
                }}
                size={size + 4}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(1.6),
                }}
              >
                <Text style={{ color: "#648DDB" }}>N</Text>ew Po
                <Text style={{ color: "#648DDB" }}>st</Text>
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="Courses"
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Entypo
                name="folder"
                color={color}
                size={size}
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: focused ? "#b9d2e7" : null,
                  paddingVertical: 3,
                  borderRadius: 20,
                }}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(1.6),
                }}
              >
                Library
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          options={{
              title:"manu123212",
              headerRight:()=><ProfileRightHeader/>,
              tabBarIcon: ({ size, color, focused }) => (
              <MaterialProIcons
                name="shield-account"
                color={color}
                size={size + 3}
                style={{
                  paddingHorizontal: 15,
                  backgroundColor: focused ? "#b9d2e7" : null,
                  paddingVertical: 3,
                  borderRadius: 20,
                }}
                
                
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(1.6),
                }}
              >
                Profile
              </Text>
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = new StyleSheet.create({
  logoPartOne: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: "bold",
  
  },
  logoPartTwo: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: "bold",
    color: "#648DDB",
  
  },
});

const Logo = function () {
  const router = useRouter();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: responsiveScreenWidth(6),
          paddingRight: responsiveScreenWidth(4),
        }}
      >
        <TouchableOpacity>
          <Icon
            source="information"
            color={"#09334E"}
            size={responsiveScreenHeight(3.3)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("(chats)");
          }}
        >
          <Icon
            source="facebook-messenger"
            color={"#09334E"}
            size={responsiveScreenHeight(3.3)}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};




function ProfileRightHeader(){
  return<>
  <View style={{marginRight:responsiveScreenWidth(3),alignItems:"center",flexDirection:"row"}}>

    <TouchableOpacity>
      <FontAwesome name="search" style={{marginRight:responsiveScreenWidth(7)}} size={responsiveScreenHeight(2.95)} color="#09334E" />
    </TouchableOpacity>


   <TouchableOpacity>
   <Ionicons name="settings" size={responsiveScreenHeight(3)} color="#09334E" />
   </TouchableOpacity>

  </View>
  </>
}