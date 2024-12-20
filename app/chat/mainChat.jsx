import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { View, StyleSheet,TextInput } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";



// import { Container } from './styles';

const mainChat = () => {

   

    const [inputFocused,setInputFocused] = useState(false)



  return (
    <>
      <StatusBar style={"dark"} backgroundColor="white" />

      {/* Bottom Message send alignment  */}
      <View style={styles.bottomInputStyle}>
        <View style={{
            flexDirection:"row",
            width:inputFocused?responsiveScreenWidth(8):responsiveScreenWidth(25),
            justifyContent:"space-between",

        }}>
        <TouchableOpacity
        onPress={()=>{
          setInputFocused(!inputFocused)
        }}
        >
        <AntDesign name="pluscircle" size={24} color="#09334E" />
        </TouchableOpacity>

       {inputFocused?null: <TouchableOpacity>
        <Entypo name="camera" size={24} color="#09334E" />
        </TouchableOpacity>}

      {inputFocused?null: <TouchableOpacity>
          <MaterialIcons
            name="photo-size-select-actual"
            size={24}
            color="#09334E"
          />
        </TouchableOpacity>}


        </View>

        <TextInput 
        placeholder="Type a message..."
        cursorColor={"#09334E"}
        style={{
            
            letterSpacing:.8,
            fontSize:responsiveScreenFontSize(2),
            backgroundColor:"#EEE",
            paddingHorizontal:15,
            paddingVertical:6,
            borderRadius:50,
            width:inputFocused?responsiveScreenWidth(80):responsiveScreenWidth(60)
        }}

        onFocus={()=>{
          setInputFocused(true)
        }}

        onBlur={()=>{
          setInputFocused(false)
        }}
        
        />

    <TouchableOpacity style={{
        width:responsiveScreenWidth(8.5),
        paddingLeft:responsiveScreenWidth(1)
    }}>
        <Ionicons name="send" size={24} color="#09334E" />
    </TouchableOpacity>
    
      </View>
      {/*  Closing of bottom send alignment */}
    </>
  );
};

export default mainChat;

const styles = new StyleSheet.create({
  bottomInputStyle: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: responsiveScreenWidth(100),
    paddingHorizontal: 5,
    paddingVertical: responsiveScreenHeight(.7),
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center"
  },
});
