import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import {
 
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Avatar,Badge  } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";


const index = () => {
  const [loaded] = useFonts({
    myfont: require("../../assets/fonts/SF-Pro.ttf"),
  });

  const [messagesPressed, setMessagesPressed] = useState(true);

  if (!loaded) {
    return null;
  }

  const data = [1,2,3,4,5]

  return (
    <>
      <StatusBar style="dark" backgroundColor="white" />

      <View style={{ height: "100%", backgroundColor: "white", marginTop: 2 }}>
        <View style={styles.seprater}>
          <TouchableOpacity onPress={() => setMessagesPressed(true)}>
            <View
              style={[
                styles.sepChild,
                { backgroundColor: messagesPressed ? "#09334E" : "#EEE" },
              ]}
            >
              <Text
                style={{
                  fontFamily: "myfont",
                  color: messagesPressed ? "white" : "black",
                  letterSpacing: 0.5,
                }}
              >
                Messages
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMessagesPressed(false)}>
            <View
              style={[
                styles.sepChild,
                {
                  backgroundColor: messagesPressed ? "#EEE" : "#09334E",
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: "myfont",
                  letterSpacing:.5,
                  color: messagesPressed ? "black" : "white",
                }}
              >
                Groups
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* User Chat box  */}



        




       {
        messagesPressed?<Individual data={data}/>:<Groups data={data}/>
    
       }

        







         


        


        

        {/* User Chat box  */}
      </View>
    </>
  );
};

export default index;

const styles = new StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1.6),
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headText: {
    fontSize: responsiveScreenFontSize(2.9),
    fontWeight: "bold",
    color: "#09334E",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#09334E",
    color: "white",
    borderRadius: 100,
  },
  seprater: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: responsiveScreenWidth(2.5),
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(4),
  },
  sepChild: {
    backgroundColor: "#EEE",
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenWidth(0.5),
    borderRadius: 100,
    fontSize: responsiveScreenFontSize(1.5),
    elevation: 3,
  },
  chatBox: {
    marginHorizontal: responsiveScreenWidth(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: responsiveScreenWidth(2),
    marginVertical:responsiveScreenHeight(.8)
  },
  chatData: {},
});





function Individual({data}){

  const router = useRouter()

  const [loaded] = useFonts({
    myfont: require("../../assets/fonts/SF-Pro.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return<>

<TouchableOpacity onPress={()=>{
            router.push("ai_bot")
          }}>
            <View style={styles.chatBox}>
          {/*  */}
          <View
            style={{ flexDirection: "row", gap: responsiveScreenWidth(2) }}
          >
           <View style={{borderWidth:2,borderRadius:50,padding:2,borderColor:"#DDD",overflow:"hidden"}}>
           <Avatar.Image
              size={responsiveScreenHeight(5.9)}
              source={{
                uri: "https://cdn.jsdelivr.net/gh/akashmishra-777/PUBLIC_IMAGES/icon.gif",
              }}
              style={{
                borderRadius:50
              }}
            />
           </View>

            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "myfont",
                
                  fontSize: responsiveScreenFontSize(2.2),
                }}
              >
                AI ChatBot
              </Text>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#606770",
                  fontSize: responsiveScreenFontSize(2),
                  marginTop: responsiveScreenHeight(-0.8),
                  letterSpacing:.5
                }}
              >
                Hello, Wanna ask me something?
              </Text>
            </View>
          </View>
          {/*  */}

          {/*  */}
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#52CD60",
                  fontWeight:"bold",
                  fontSize: responsiveScreenFontSize(1.7),
                  marginTop:4
                }}
              >
                Online
              </Text>

              <Badge
              visible={true}
              size={21}
          style={{
            backgroundColor:"#25D266",
            
          }}
          >
            <Text style={{fontWeight:"bold"}}>23</Text>
          </Badge>


            </View>
          </View>
          {/*  */}
        </View>



    </TouchableOpacity>



  <FlatList 
        data={data}
        renderItem={({item,index})=>{
          return<>
         
          <TouchableOpacity onPress={()=>{
            router.push({
              pathname:"chat/mainChat"
            })
          }}>

            <View style={styles.chatBox}>
          {/*  */}
          <View
            style={{ flexDirection: "row", gap: responsiveScreenWidth(2) }}
          >
           <View style={{borderWidth:2,borderRadius:50,padding:2,borderColor:"gray"}}>
           <Avatar.Image
                size={responsiveScreenHeight(5.9)}
              source={{
                uri: "https://rare-gallery.com/thumbs/511336-sunny-leone.jpg",
              }}
            />
           </View>

            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "myfont",
                  
                  fontSize: responsiveScreenFontSize(2.2),
                }}
              >
                Chaman Chutiya
              </Text>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#606770",
                  fontSize: responsiveScreenFontSize(2),
                  marginTop: responsiveScreenHeight(-0.8),
                }}
              >
                Aur ho kaa haal ba ?
              </Text>
            </View>
          </View>
          {/*  */}

          {/*  */}
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#606770",
                  fontSize: responsiveScreenFontSize(1.7),
                }}
              >
                10:18 AM
              </Text>

              <Badge
              visible={false}
              size={21}
          style={{
            backgroundColor:"#25D266",
            
          }}
          >
            <Text style={{fontWeight:"bold"}}>23</Text>
          </Badge>


            </View>
          </View>
          {/*  */}
        </View>



    </TouchableOpacity>
          </>
        }}
      />
  
  </>
}






function Groups({data}){

  const router = useRouter()

  return<>
  <FlatList 
        data={data}
        renderItem={({item,index})=>{
          return<>
         
          <TouchableOpacity  >


            <View style={styles.chatBox}>
          {/*  */}
          <View
            style={{ flexDirection: "row", gap: responsiveScreenWidth(2) }}
          >
            <Avatar.Image
              size={responsiveScreenHeight(6.2)}
              source={{
                uri: "https://rare-gallery.com/thumbs/511336-sunny-leone.jpg",
              }}
            />

            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "myfont",
                  fontSize: responsiveScreenFontSize(2.1),
                }}
              >
                Pallavi Verma
              </Text>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#606770",
                  fontSize: responsiveScreenFontSize(2),
                  marginTop: responsiveScreenHeight(-0.8),
                }}
              >
                Aur ho kaa haal ba ?
              </Text>
            </View>
          </View>
          {/*  */}

          {/*  */}
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "myfont",
                  color: "#606770",
                  fontSize: responsiveScreenFontSize(1.7),
                }}
              >
                10:18 AM
              </Text>

              <Badge
              visible={true}
              size={21}
          style={{
            backgroundColor:"#25D266",
            
          }}
          >
            <Text style={{fontWeight:"bold"}}>23</Text>
          </Badge>


            </View>
          </View>
          {/*  */}
        </View>



    </TouchableOpacity>
          </>
        }}
      />
  
  </>
}