import { ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
 
} from "react-native-responsive-dimensions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Switch } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import Feather from '@expo/vector-icons/Feather';

export default function Post() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isLikesHidden, setIsLikesHidden] = useState(false);
  const [isCommentsHidden, setIsCommentsHidden] = useState(false);
  const [isSharable, setIsSharable] = useState(false);
  const [isDownloadable, setIsDownloadable] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);



 

  return (
    <>
      <ScrollView >
        <View style={styles.main}>
          <View style={styles.select}>
            <Text style={[styles.head, { color: "#4c669f", }]}>Add Media</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.imageArea}>
              <MaterialIcons
                name="perm-media"
                size={responsiveScreenHeight(4)}
                color="#4c669f"
              />
              <Text style={{ fontSize: responsiveScreenFontSize(2.3),fontWeight:"400", }}>
                Upload your media
              </Text>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(1.8),
                  color: "#606770",
                  fontWeight:"400",
                  
                }}
              >
                Just tap here to{" "}
                <Text style={{ color: "#4c669f", fontWeight: "bold", }}>
                  Browse
                </Text>{" "}
                your gallery
              </Text>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(1.8),
                  color: "#606770",
                  fontWeight:"400",
                  
                }}
              >
                to upload media
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.select}>
            <Text style={[styles.head, { color: "#4c669f", }]}>Description</Text>
          </View>

          <View>
            <TextInput
              multiline={true}
              cursorColor={"#4c669f"}
              onBlur={() => setInputFocused(false)}
              onFocus={() => setInputFocused(true)}
              numberOfLines={4}
              style={[
                styles.description,
                { borderColor: inputFocused ? "#4c669f" : "#DDD",fontWeight:"400", },
              ]}
              
              placeholder="Write the description of the post here."
            />
            <Text
              style={{
                fontSize: responsiveScreenFontSize(1.6),
                textAlign: "right",
                paddingRight: responsiveScreenWidth(4),
                color: "#606770",
              
              }}
            >
              0/150
            </Text>
          </View>

          <View style={styles.select}>
            <Text style={[styles.head, { color: "#4c669f" }]}>Category</Text>
          </View>

          <View
            style={[
              styles.categorySection,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
             <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={[styles.button,{marginLeft:5}]}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: responsiveScreenWidth(1),
                }}
              >
                <Feather name="plus" size={responsiveScreenWidth(6.5)} color="white" />
                
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.select}>
            <Text style={[styles.head, { color: "#4c669f" }]}>HashTags</Text>
          </View>


            <View style={styles.hastags}>
              
              <View style={{flexDirection:'row',justifyContent:"flex-start",alignItems:"center",paddingVertical:responsiveScreenHeight(.7),borderRadius:5}}>

              <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={[styles.button,{marginLeft:3}]}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: responsiveScreenWidth(1),
                }}
              >
                <Feather name="plus" size={responsiveScreenWidth(6.5)} color="white" />
                
                
              </TouchableOpacity>
            </LinearGradient>

              </View>


            </View>













          <View style={styles.select}>
            <Text style={[styles.head, { color: "#4c669f" }]}>Controls</Text>
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              height:responsiveScreenHeight(6),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
                
              }}
            >
              <MaterialIcons
                name="lock-outline"
                size={responsiveScreenWidth(6.3)}
                color="#606770"
              />
              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Keep it private
              </Text>
            </View>
            <Switch
              value={isPrivate}
              onValueChange={() => setIsPrivate(!isPrivate)}
              color="#4c669f"
            />
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
               height:responsiveScreenHeight(6),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
              }}
            >
              <MaterialCommunityIcons
                name="heart-off-outline"
                size={responsiveScreenWidth(6.5)}
                color="#606770"
              />

              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Hide likes count
              </Text>
            </View>
            <Switch
              value={isLikesHidden}
              onValueChange={() => setIsLikesHidden(!isLikesHidden)}
              color="#4c669f"
            />
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
               height:responsiveScreenHeight(6),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
              }}
            >
              <MaterialCommunityIcons
                name="message-off-outline"
                size={responsiveScreenWidth(5.8)}
                color="#606770"
              />
              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Disable comments
              </Text>
            </View>
            <Switch
              value={isCommentsHidden}
              onValueChange={() => setIsCommentsHidden(!isCommentsHidden)}
              color="#4c669f"
            />
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
               height:responsiveScreenHeight(6),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
              }}
            >
              <MaterialCommunityIcons
                name="share-off-outline"
                size={responsiveScreenWidth(6.5)}
                color="#606770"
              />
              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Disable sharing
              </Text>
            </View>
            <Switch
              value={isSharable}
              onValueChange={() => setIsSharable(!isSharable)}
              color="#4c669f"
            />
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
               height:responsiveScreenHeight(6),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
              }}
            >
              <MaterialCommunityIcons
                name="download-off-outline"
                size={responsiveScreenWidth(6.5)}
                color="#606770"
              />
              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Disable downloading
              </Text>
            </View>
            <Switch
              value={isDownloadable}
              onValueChange={() => setIsDownloadable(!isDownloadable)}
              color="#4c669f"
            />
          </View>

          <View
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: responsiveScreenHeight(1),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: responsiveScreenWidth(1),
              }}
            >
              <MaterialCommunityIcons
                name="rocket-launch-outline"
                size={responsiveScreenWidth(6)}
                color="#606770"
              />
              <Text style={{ fontWeight: "500", color: "#606770" }}>
                Boost my post
              </Text>
            </View>

            <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.button}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: responsiveScreenWidth(1),
                }}
              >
                <FontAwesome name="inr" size={17} color="#DDD" />
                <Text
                  style={{
                    paddingBottom: 2,
                    color: "#DDD",
                    fontWeight: "500",
                  
                  }}
                >
                  299/-
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <TouchableOpacity >
          <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={{padding:responsiveScreenHeight(1.7),marginHorizontal:responsiveScreenWidth(1),borderRadius:5,marginTop:responsiveScreenHeight(2),flexDirection:"row",alignItems:"center", gap:responsiveScreenWidth(1),justifyContent:"center",}}
            >
            
            <Feather name="upload" size={responsiveScreenHeight(2.2)} color="white" />
       
                
                <Text
                  style={{
                    paddingBottom: 2,
                    color: "#DDD",
                    fontWeight: "500",
                    textAlign:"center",
                
                  }}
                >
                  Create Post
                </Text>
          
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  );
}

const styles = new StyleSheet.create({
  main: {
    height: responsiveScreenHeight(115),
    backgroundColor: "white",
  },

  select: {
    // backgroundColor:"#4c669f",
    paddingHorizontal: responsiveScreenHeight(1.5),
    paddingVertical: responsiveScreenHeight(1),
    flexDirection: "row",
    gap: responsiveScreenWidth(3),
  },
  head: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: "500",
  },
  imageArea: {
    backgroundColor: "white",
    height: responsiveScreenHeight(23),
    marginHorizontal: responsiveScreenWidth(3),
    borderRadius: 7,
    borderWidth: 1.5,
    elevation: 0,
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    marginHorizontal: responsiveScreenWidth(3),
    borderWidth: 1.5,
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 7,
    borderColor: "#DDD",
    color: "#4c669f",
    textDecorationLine: "none",
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenWidth(1),
    elevation: 2,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: responsiveScreenFontSize(2),
    color: "#fff",
  },
  categorySection: {
    borderColor: "#eee",
    borderRadius: 7,
    padding: 8,
    alignItems: "space-evenly",
    justifyContent: "space-between",
    gap: responsiveScreenWidth(1),
  },
  hastags:{
    marginHorizontal:responsiveScreenWidth(3)
  }
});
