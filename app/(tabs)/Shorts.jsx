import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";

import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

import Octicons from '@expo/vector-icons/Octicons';

import Feather from '@expo/vector-icons/Feather';

import { Avatar } from "react-native-paper";

import { Video, ResizeMode } from "expo-av";

import { useCallback, useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";

import Entypo from "@expo/vector-icons/Entypo";

import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useFocusEffect } from "expo-router";


export default function Shorts() {
  const [isSelected, setIsSelected] = useState(false);
  const [showDescription,setShowDescription] = useState(false)
  const [muteUnmute,setMuteUnmute] = useState(false)

useFocusEffect(()=>{
  setMuteUnmute(false)
  return ()=>{
    setMuteUnmute(true)
  }
})

  return (
    <>
      <StatusBar backgroundColor="white" style="dark" />
      <FlatList
        data={[
          {
            id: 1,
            url: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/a.mp4",
          },
          {
            id: 2,
            url: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/b.mp4",
          },
          {
            id: 3,
            url: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/c.mp4",
          },
          {
            id: 4,
            url: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/WhatsApp Image 2024-11-02 at 08.36.09_7d3d4a62.jpg",
          },
        ]}
        horizontal={true}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={styles.main}>
                <Video
                  source={{
                    uri: item.url,
                  }}
                  shouldPlay={isSelected == index ? true : false}
                  isLooping
                  isMuted={muteUnmute}
                  style={{
                    width: responsiveScreenWidth(100),
                    height: responsiveHeight(100),
                    marginBottom: responsiveScreenHeight(7),
                  }}
                  resizeMode={ResizeMode.CONTAIN}
                />

                <View style={styles.bottomDesign}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: responsiveScreenWidth(2),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 2,
                          padding: 2,
                          borderColor: "transparent",
                          borderRadius: 50,
                        }}
                      >
                        <TouchableOpacity>
                          <Avatar.Image
                            size={responsiveScreenWidth(11.5)}
                            style={{
                              backgroundColor: "transparent",
                            }}
                            source={{
                              uri: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/WhatsApp Image 2024-11-02 at 08.36.09_7d3d4a62.jpg",
                            }}
                          />
                        </TouchableOpacity>


                      </View>

                      <View
                        style={{
                          justifyContent: "center",
                          gap: responsiveScreenHeight(0.2),
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: responsiveScreenFontSize(1.95),
                          }}
                        >
                          eagle_akash_mishra
                        </Text>

                        <View
                          style={{
                            flexDirection: "row",
                            gap: responsiveScreenWidth(0.5),
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: responsiveScreenWidth(-0.8),
                          }}
                        >
                          <Ionicons
                            name="musical-notes-sharp"
                            size={responsiveScreenWidth(3.5)}
                            color="white"
                          />
                          <Text
                            numberOfLines={1}
                            style={{
                              color: "white",
                              fontSize: responsiveScreenFontSize(1.6),
                              maxWidth: responsiveScreenWidth(50),
                            }}
                          >
                            Tohare karanwa ye raja ji hum gaili pitaai aaj ho
                          </Text>
                        </View>


                      </View>


                    </View>



                    <View style={{flexDirection:"row",gap:responsiveScreenWidth(4),alignItems:"center"}}>

                    <TouchableOpacity style={{backgroundColor:"transparent",paddingHorizontal:responsiveScreenWidth(3.5),paddingVertical:responsiveScreenHeight(.9),borderRadius:7,borderWidth:1.5,borderColor:"white",marginRight:responsiveScreenWidth(2)}}>
                          <Text style={{color:"white",fontWeight:"bold",fontSize:responsiveScreenFontSize(1.8)}}>Follow</Text>
                        </TouchableOpacity>

                    </View>


                  </View>


                  <View>
                            <TouchableOpacity onPress={()=>{
                              setShowDescription(!showDescription)
                            }}>
                            <Text numberOfLines={showDescription?3:1} style={{color:"darkgrey",paddingHorizontal:responsiveScreenWidth(1.5),maxWidth:responsiveScreenWidth(93),paddingBottom:showDescription?responsiveScreenHeight(1):0,fontSize:responsiveScreenFontSize(1.75)}}>Let's see how to kill a man at night in a proper way!</Text>
                            </TouchableOpacity>
                  </View>


                </View>




                <View style={styles.engagement}>

                <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                <FontAwesome name="heart-o" size={responsiveScreenHeight(3.5)} color="white" />
                <Text style={{color:"white",fontSize:responsiveScreenFontSize(1.5),fontWeight:"bold"}}>268K</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                   <Feather name="message-circle" size={responsiveScreenHeight(3.7)} color="white" />
                   <Text style={{color:"white",fontSize:responsiveScreenFontSize(1.6),fontWeight:"bold"}}>23K</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                <Feather name="send"  size={responsiveScreenHeight(3.2)} color="white" />
                   <Text style={{color:"white",fontSize:responsiveScreenFontSize(1.6),fontWeight:"bold"}}>23K</Text>
                </TouchableOpacity>


                <TouchableOpacity >
                <Entypo name="dots-three-vertical" size={responsiveScreenHeight(2.5)} color="white" />
                </TouchableOpacity>
                
                </View>















              </View>
            </>
          );
        }}
        onScroll={(e) => {
          const index =
            e.nativeEvent.contentOffset.x.toFixed(0) /
            Dimensions.get("window").width;
          setIsSelected(index);
          setMuteUnmute(false)
        }}
        
      />
    </>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: responsiveHeight(50),
    backgroundColor: "black",
    margin: 0,
    padding: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomDesign: {
    position: "absolute",
    bottom: 10,
    marginBottom: responsiveScreenHeight(8),
    height: responsiveScreenHeight(13),
    width: responsiveScreenWidth(100),
    paddingHorizontal: responsiveScreenWidth(2),
    justifyContent:"center",
    gap:responsiveScreenHeight(1)
  },
  engagement: {
    position: "absolute",
    backgroundColor:"transparent",
    bottom:responsiveScreenHeight(22),
    right:0,
    height:responsiveHeight(50),
    width:responsiveScreenWidth(20),
    justifyContent:"flex-end",
    alignItems:"center",
    gap:responsiveScreenHeight(3)
    
  },
});
