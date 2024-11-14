import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet,FlatList } from "react-native";
import { Avatar, Icon, Card } from "react-native-paper";
import AntIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import PostLoading from "../loading/loadingPost";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";




export default function index() {

  const [postDataState,setPostData] = useState([]);
  const [isRefreshing,setRefreshing] = useState(false);
  const [mainApiCallTrack,setMainApiCallTrack] = useState(false);


  async function apiCall(){
    setMainApiCallTrack(false)
    try {
      const postData = await axios.post("https://codelabs-server-sp7w.onrender.com/posts/getPublicPost")
      setPostData(postData.data.posts);
      setMainApiCallTrack(true)
    } catch (error) {
      console.warn("Error while fetching data");
      setTimeout(()=>{
        setRefreshing(false)
      },1500)
      
    }
  }
  

  useEffect(()=>{
    apiCall()
  },[])


  function onRefresh(){
    setRefreshing(true)
    apiCall()
    if(mainApiCallTrack){
      setTimeout(() => {
        setRefreshing(false)
      }, 1500);
    }else{
      setTimeout(()=>{
        setRefreshing(false)
      },6000)
    }
  }


 

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          zIndex: 0,
          marginTop: 1,
          padding: 0,
        }}
      >

  

       {postDataState.length == 0?<PostLoading/>:
        <FlatList
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        style={styles.flatStyle} 
        data={postDataState}
        renderItem={({item})=>{
            return<>

           <Posts 
           description={item.description}
           postMedia={item.postMediaUrl}
           likesCount={item.likes.length}
           commentsCount={item.comments.length}
           />
           
            </>
        }}
         />}


      </View>
    </>
  );
}

const styles = new StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: responsiveScreenHeight(.8),
    marginTop: responsiveScreenHeight(1),
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  cardProfileImg: {
    marginHorizontal: responsiveScreenWidth(2.5),
    backgroundColor: "transparent",
    elevation: 4,
  },
  headInternalView1: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveScreenWidth(85),
  },
  headInternalView2: {
    width: responsiveScreenWidth(15),
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: responsiveScreenWidth(2),
  },
  headOfPost: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  engagement: {
    backgroundColor: "transparent",
    marginTop: 0,
    padding: responsiveScreenWidth(1),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatStyle:{
    marginTop:responsiveScreenHeight(0)
  }
});




function Posts({description,postMedia,likesCount,commentsCount}){

  const [loaded] = useFonts({
    myfont:require("../../assets/fonts/SF-Pro.ttf")
  })

  if(!loaded){
    return null;

  }


  return <>
  <StatusBar style="dark"/>
  <View style={styles.card}>
            <View style={styles.headOfPost}>
              <View style={styles.headInternalView1}>
                <Avatar.Image
                  style={styles.cardProfileImg}
                  source={{
                    uri: "https://imagevars.gulfnews.com/2019/04/23/190423_sunny_deol_16a4a35474a_large.jpg",
                  }}
                  size={responsiveScreenWidth(11.8)}
                />

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#09334E",
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                        letterSpacing:.5
                        
                      }}
                    >
                      Simran Goswami {""}
                    </Text>
                    {/* Blue tick icon */}
                    <Icon source={"check-decagram"} size={17} color="#648DDB" />
                    {/* Closing of blue tick icon */}
                  </View>

                  <Text
                    style={{
                      fontWeight: "400",
                      color: "#606770",
                      fontSize: responsiveFontSize(1.76),
                      fontFamily:"myfont",
                      letterSpacing:1,
                      marginTop:responsiveScreenHeight(-.4)
                    }}
                  >
                    _codelabs_
                  </Text>
                </View>
              </View>

              <View style={styles.headInternalView2}>
                <TouchableOpacity>
                  <Icon source={"dots-vertical"} size={27} color="#09334E" />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: responsiveScreenWidth(2),
                paddingVertical: responsiveScreenHeight(0.5),
              }}
            >
              <Text
                style={{ fontSize: responsiveFontSize(1.9), color: "black",fontFamily:"myfont",letterSpacing:.7}}
                numberOfLines={5}
              >
                {description} 
              </Text>
            </View>

            <Card style={{ marginTop: responsiveScreenHeight(1) }}>
              <Card.Cover
                style={{ borderRadius: 0 }}
                source={{uri:postMedia}}
              />
            </Card>

            <View style={styles.engagement}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 5,
                    paddingVertical: 6,
                    borderRadius: 10,
                  }}
                >
                  <AntIcon name="hearto" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                        letterSpacing:1
                       
                      }}
                    >
                      {" "}
                      {likesCount<10?"Like":likesCount}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 5,
                    paddingVertical: 6,
                    borderRadius: 10,
                    
                  }}
                >
                  <Feather name="message-circle" size={22} />

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                       
                        fontSize: responsiveFontSize(1.8),
                        fontFamily:"myfont",
                      letterSpacing:1
                        
                      }}
                    >
                      {" "}
                      {commentsCount<10?"Comment":commentsCount}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 6,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>
                  <Icon source={"bookmark-outline"} size={26} />
                </TouchableOpacity>

                <Text> </Text>

                <TouchableOpacity>
                  <Icon source={"share-variant-outline"} size={25} />
                </TouchableOpacity>

              </View>


            </View>

            {/* View all the comments section and post creation time */}

            <View
              style={{
                paddingHorizontal: 10,
                paddingBottom: 8,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: responsiveScreenHeight(0.5),
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "#606770",fontFamily:"myfont",
                    letterSpacing:.5 }}>View all the comments</Text>
              </TouchableOpacity>

              <Text style={{ color: "#606770",fontFamily:"myfont",letterSpacing:.7 }}>5 seconds ago</Text>
            </View>
</View>
  </>
}



// userId,postId,userWhoCreatedPost,username,postImage,likes,comments,shares