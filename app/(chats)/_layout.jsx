import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Tabs } from "expo-router";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Iconb from 'react-native-vector-icons/Entypo'
import Iconc from 'react-native-vector-icons/FontAwesome'
import Icond from 'react-native-vector-icons/Feather'








export default function Layout() {

  
 

  return (
    <>
      <Tabs screenOptions={{
        tabBarStyle:{
          height:0
        }
      }}
      >


        <Tabs.Screen name="index" 
        options={{
          
          headerTitle: () => <Logo />,
          headerRight:()=><HeaderRight/>,
          headerShadowVisible:true,
          tabBarShowLabel:true,
          tabBarActiveTintColor:"#09334E",
          tabBarStyle:{
          
            paddingVertical:5,
            height:responsiveScreenHeight(0),
          }
         
        }}
        />

       


      </Tabs>
    </>
  );
}

function Logo() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: responsiveScreenWidth(1),
        }}
      >
        {/* <Icona name="hipchat" size={20} color={"black"} /> */}
        <Text style={styles.headText}>
          <Text style={{ color: "#648DDB",fontWeight:"500" }}>Ch</Text>
          ats
        </Text>
      </View>
    </>
  );
}

function HeaderRight() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          gap: responsiveScreenWidth(7),
          justifyContent: "center",
          alignItems: "center",
          paddingRight:responsiveScreenWidth(3)
        }}>

        <TouchableOpacity style={styles.newChat}>
          <Icond name="plus" size={26} color={"#09334E"} />
        </TouchableOpacity>


      
        <TouchableOpacity>
          <Iconc name="search" size={19} color={"#09334E"} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Iconb name="dots-three-vertical" size={19} color={"#09334E"} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = new StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1.6),
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },

  headText: {
    fontSize: responsiveFontSize(3),
    fontWeight: "500",
    color: "#09334E",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#09334E",
    color: "white",
  },newChat:{
    backgroundColor:"#EEEEEE",
    borderRadius:6,
    paddingHorizontal:3
  }
});
