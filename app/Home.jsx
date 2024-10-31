import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-paper";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialProIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import BottomNavigationHome from './bottomNavigationPages/Home.jsx'
import Shorts from "./bottomNavigationPages/shorts.jsx"
import Library from "./bottomNavigationPages/lib.jsx";
import Live from "./bottomNavigationPages/live.jsx";
import Profile from "./bottomNavigationPages/profile.jsx";


export default function Home() {
  const router = useRouter();
  const [homeIcon,setHomeIcon] = useState(true)
  const [shortsIcon,setShortsIcon] = useState(false)
  const [libIcon,setLibIcon] = useState(false)
  const [liveIcon,setLiveIcon] = useState(false)
  const [profileIcon,setProfileIcon] = useState(false)




  function homeIconClick(){
    setHomeIcon(true)
    setShortsIcon(false)
    setLibIcon(false)
    setLiveIcon(false)
    setProfileIcon(false)
  }


  function shortsIconClick(){
    setHomeIcon(false)
    setShortsIcon(true)
    setLibIcon(false)
    setLiveIcon(false)
    setProfileIcon(false)
  }



  function libIconClick(){
    setHomeIcon(false)
    setShortsIcon(false)
    setLibIcon(true)
    setLiveIcon(false)
    setProfileIcon(false)
  }



  function liveIconClick(){
    setHomeIcon(false)
    setShortsIcon(false)
    setLibIcon(false)
    setLiveIcon(true)
    setProfileIcon(false)
  }



  function profileIconClick(){
    setHomeIcon(false)
    setShortsIcon(false)
    setLibIcon(false)
    setLiveIcon(false)
    setProfileIcon(true)
  }




  async function Logout() {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      router.push({
        pathname: "/",
      });
    } catch (error) {
      console.warn("error");
    }
  }

  return (
    <>
      <SafeAreaView style={{ height: "100%" }}>
        <StatusBar style="dark" backgroundColor="white" />
        {/* Main part starting */}

        {/* Head */}
        <View style={styles.appBar}>
          {/* Logo starting */}
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

          <TouchableOpacity
            style={{
              // backgroundColor: "#DDDDDD",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 20,
            }}
          >
            <Icon
              source="chemical-weapon"
              color={"black"}
              size={responsiveScreenHeight(3.7)}
            />
          </TouchableOpacity>


            <Text
              style={{
                fontWeight: "bold",
                fontSize: responsiveScreenFontSize(2.9),
              }}
            >
              Code
              <Text
                style={{
                  color: "#648DDB",
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(2.9),
                }}
              >
                Labs
              </Text>
            </Text>
          </View>

          {/* Logo ending */}

          {/* 2nd part */}
          <View style={styles.appBarSecondView}>
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

          {/* ending of 2nd part */}
        </View>
        {/* Closing of head */}

        {/* Custom Bottom Navigation  */}

        <View style={styles.customBottomNavigation}>
          <View style={{
            justifyContent:"center",
              alignItems:"center",
              
          }}>
          <TouchableOpacity
          onPress={homeIconClick}
            style={{
              backgroundColor:homeIcon?"#DDDDDD":"transparent",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 20,
              
            }}
          >
            <Icon
              source="home"
              color={"#09334E"}
              size={responsiveScreenHeight(3.5)}
            />
          </TouchableOpacity>

          <Text style={{fontWeight:"bold",fontSize:responsiveFontSize(1.8),marginTop:responsiveScreenHeight(.25)}}>Home</Text>

          </View>



          <View style={{
            justifyContent:"center",
              alignItems:"center",
              
          }}>

          <TouchableOpacity
          onPress={shortsIconClick}
            style={{
              backgroundColor:shortsIcon?"#DDDDDD":"transparent",
              paddingHorizontal: 17,
              paddingVertical: 3,
              borderRadius: 20,
            }}
          >
             

            <MaterialIcons name="video-library" color={"#09334E"} size={responsiveScreenHeight(3.3)}/>

            

            

          </TouchableOpacity>

          <Text style={{fontWeight:"bold",fontSize:responsiveFontSize(1.8),marginTop:responsiveScreenHeight(.25)}}>Shorts</Text>

          </View>





          <View style={{
            justifyContent:"center",
              alignItems:"center",
              
          }}>

          <TouchableOpacity
          onPress={libIconClick}
            style={{
              backgroundColor:libIcon?"#DDDDDD":"transparent",
              paddingHorizontal: 17,
              paddingVertical: 3,
              borderRadius: 20,
            }}
          >
             

             <Ionicons name="library" color={"#09334E"} size={responsiveScreenHeight(3.3)}/>

            

            

          </TouchableOpacity>

          <Text style={{fontWeight:"bold",fontSize:responsiveFontSize(1.8),marginTop:responsiveScreenHeight(.25)}}>Library</Text>
          
          </View>



          <View style={{
            justifyContent:"center",
              alignItems:"center",
              
          }}>

          <TouchableOpacity
          onPress={liveIconClick}
            style={{
              backgroundColor: liveIcon?"#DDDDDD":"transparent",
              paddingHorizontal: 17,
              paddingVertical: 3,
              borderRadius: 20,
            }}
          >
             

             <Ionicons name="tv" color={"#09334E"} size={responsiveScreenHeight(3.4)}/>

            

            

          </TouchableOpacity>

          <Text style={{fontWeight:"bold",fontSize:responsiveFontSize(1.8),marginTop:responsiveScreenHeight(.25)}}>Live</Text>
          
          </View>


          
          

       

          



       



          <View style={{
            justifyContent:"center",
              alignItems:"center",
              
          }}>

          <TouchableOpacity
          onPress={profileIconClick}
            style={{
              backgroundColor: profileIcon?"#DDDDDD":"transparent",
              paddingHorizontal: 17,
              paddingVertical: 3,
              borderRadius: 20,
            }}
          >
             

             <MaterialProIcons name="shield-account" color={"#09334E"} size={responsiveScreenHeight(3.3)}  />

            

            

          </TouchableOpacity>

          <Text style={{fontWeight:"bold",fontSize:responsiveFontSize(1.8),marginTop:responsiveScreenHeight(.25)}}>Profile</Text>
          
          </View>


          
        </View>

        {/* Closing of custom bottom navigation */}



     
        







        {/* Main part ending */}
      </SafeAreaView>
    </>
  );
}

const styles = new StyleSheet.create({
  appBar: {
    backgroundColor: "white",
    padding: responsiveScreenHeight(1.5),
    elevation: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  appBarSecondView: {
    flexDirection: "row",
    gap: responsiveScreenWidth(7),
  },
  customBottomNavigation: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: responsiveScreenWidth(100),
    padding: responsiveScreenWidth(1),
    height: responsiveScreenHeight(8.5),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 4,
  },
});
